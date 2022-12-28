import React from "react";
import { StyledLoader } from "../styles/StyledLoader";
import Lottie from "lottie-react";
import animationData from "../lottie/ProgressBar.json";

const Loader = () => {
  return (
    <StyledLoader>
      <div className="content">
        <div className="lottie">
          <Lottie animationData={animationData} height={"100%"} width={"100%"} />
        </div>
      </div>
    </StyledLoader>
  );
};

export default Loader;
