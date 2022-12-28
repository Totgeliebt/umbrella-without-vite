import React from "react";
import { StyledCreateNude } from "../../styles/StyledCreateNude";
import boobsIcon from "../../assets/icons/boobs-icon.svg";
import photo from "../../assets/icons/picture-icon.svg";
import jpg from "../../assets/icons/jpg-icon.svg";
import jpeg from "../../assets/icons/jpeg-icon.svg";
import png from "../../assets/icons/png-icon.svg";
import MyButton from "../../components/MyButton";
import Notification from "../../components/popups/Notification";
import { StyledH1Create } from "../../styles/StyledH1";
import { StyledH2 } from "../../styles/StyledH2";
import { StyledLi, StyledPCreate } from "../../styles/StyledP";
import { StyledIcon } from "../../styles/StyledIcon";
import { useTranslation } from "react-i18next";
import FilterComponent from "./FilterComponent";

const CreateNudeComponent = ({
  handleFileSubmit,
  getInputProps,
  getRootProps,
  handlePopup,
  files,
  thumbs,
  setFileOps,
}) => {
  const { t } = useTranslation();
  const lng = t("create nude", { returnObjects: true });
  return (
    <StyledCreateNude>
      <div className="content">
        <StyledIcon src={boobsIcon} alt="star" />
        <StyledH1Create>{lng["section header"]}</StyledH1Create>
        <div className="block_container">
          <div className="recommendations">
            <h3>{lng["recommendations"]}</h3>
            <StyledH2>{lng["pose title"]}</StyledH2>
            <ul>
              <StyledLi>{lng["pose text"]}</StyledLi>
              <StyledLi>{lng["pose text2"]}</StyledLi>
              <StyledLi>{lng["pose text3"]}</StyledLi>
            </ul>
            <StyledH2>{lng["clothes title"]}</StyledH2>
            <ul>
              <StyledLi>{lng["clothes text"]}</StyledLi>
              <StyledLi>{lng["clothes text2"]}</StyledLi>
            </ul>
          </div>
          <form className="upload" onSubmit={handleFileSubmit}>
            <section className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <div className="inner_border">
                  <input type="file" {...getInputProps()} />
                  <img className="drag" src={photo} alt="" />
                  <p className="drag">{lng["drag"]}</p>
                  <StyledPCreate>{lng["formats"]}</StyledPCreate>
                  <div className="format_icons">
                    <img className="format_icon" src={jpg} alt="jpg" />
                    <img className="format_icon" src={jpeg} alt="jpeg" />
                    <img className="format_icon" src={png} alt="png" />
                  </div>
                  <StyledPCreate>
                    {lng["photo size"]}
                    <br />
                    <b> {lng["photo format"]}</b>
                  </StyledPCreate>
                </div>
              </div>
              <aside>{thumbs}</aside>
            </section>
            <FilterComponent change={setFileOps} />
            <MyButton
              btnWidth="300px"
              text={lng["nudify btn"]}
              disabled={!files.length}
            />
          </form>
        </div>
      </div>
      <Notification
        handlePopup={handlePopup}
        popupType={"wait"}
        text={lng["wait note"]}
      />
      <Notification
        handlePopup={handlePopup}
        popupType={"error"}
        text={lng["error note"]}
      />
    </StyledCreateNude>
  );
};

export default CreateNudeComponent;
