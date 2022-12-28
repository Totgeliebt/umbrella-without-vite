import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { balance, showPopup } from "../../thunkApi/userSlice";
import { useDropzone } from "react-dropzone";
import {
  addImage,
  addNewImage,
  checkImageState,
  updateImage,
} from "../../thunkApi/imagesSlice";

const CreateNudeContainer = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [fileOps, setFileOps] = useState({});
  const processingType = fileOps.processingType;
  const removeImg = () => {
    setFiles([]);
  };

  const token = useSelector((state) => state.user.user?.authToken);
  const wallet = useSelector((state) => state.user.user.wallet);
  const img = useRef(null);

  const handlePopup = (isShow, type) => {
    dispatch(
      showPopup({
        isShow,
        type: type ? type : "",
      })
    );
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpg": [".jpeg", ".jpg", ".png"],
    },
    onDrop: (files) => {
      files.map((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFiles(
            files.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
                base64Image: e.target.result,
              })
            )
          );
        };
        reader.readAsDataURL(file);
      });
    },
  });

  const image = { imageBase64: files[0]?.base64Image.split(",")[1] };

  // const getImageState = async (imageId) => {
  //   return new Promise((resolve, reject) => {
  //   //   setTimeout(async () => {
  //       try {
  //         const data = await dispatch(checkImageState({ imageId, token }));
  //         resolve(data);
  //       } catch (error) {
  //         resolve({ payload: { state: 2 } });
  //       }
  //   //   }, 15000);
  //   });
  // };

  const handleFileSubmit = async (event) => {
    event.preventDefault();
    try {
      event.preventDefault();
      let stateImage = 1;
      if (wallet === 0) {
        navigate("../deposit");
        return;
      }
      const data = await dispatch(
        addNewImage({ image, token, processingType })
      );
      console.log(processingType, "==>proc type inside func");
      const { imageId } = data.payload;

      dispatch(addImage({ imageId }));
      navigate("../photos");
      // while (!stateImage) {
      const data2 = await dispatch(checkImageState({ imageId, token }));
      stateImage = data2.payload.state;
      // }
      if (stateImage === 1) {
        await dispatch(balance(token));
      }
      dispatch(updateImage({ imageId, stateCard: stateImage }));
    } catch (error) {
      console.log(error);
    }
  };

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          className="img_after"
          alt=""
          ref={img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <div className="remove_image" onClick={removeImg}>
          ×
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  const props = {
    handleFileSubmit,
    getInputProps,
    getRootProps,
    handlePopup,
    files,
    thumbs,
    setFileOps,
  };

  return children(props);
};

export default CreateNudeContainer;
