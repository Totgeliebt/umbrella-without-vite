import React from "react";
import { StyledClothes } from "../../styles/StyledLanding";
import frontBottom from "../../assets/icons/body-bottom-icon.svg";
import beforeOne from "../../assets/images/manyFaces1.png";
import afterOne from "../../assets/images/4_2.png";
import afterGroup from "../../assets/images/3_2.png";
import beforeGroup from "../../assets/images/manyFaces.png";
import { StyledH2 } from "../../styles/StyledH2";
import { StyledP } from "../../styles/StyledP";
import { useTranslation } from "react-i18next";

const Clothes = () => {
  const { t } = useTranslation('landing');
  const lng = t("clothes", { returnObjects: true });
  return (
    <StyledClothes>
      <div className="block_container">
        <div className="text_content">
          <img src={frontBottom} alt="boobs" />
          <StyledH2>
            {lng["section heading"]} <br /> {lng["that have"]}
            <span> {lng["a lot of faces"]} </span>
          </StyledH2>
          <StyledP>{lng["unlike"]}</StyledP>
          <StyledP>{lng["no longer"]}</StyledP>
        </div>
        <div className="images">
          <img src={beforeGroup} alt="before" className="pic-1 all" />
          <img src={afterGroup} alt="after" className="pic-2 all" />
          <img src={beforeOne} alt="before" className="pic-3 all" />
          <img src={afterOne} alt="after" className="pic-4 all" />
        </div>
      </div>
    </StyledClothes>
  );
};

export default Clothes;
