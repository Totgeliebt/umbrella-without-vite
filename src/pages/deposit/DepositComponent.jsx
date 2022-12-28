import React from "react";
import { StyledDeposit } from "../../styles/StyledDeposit";
import boobsIcon from "../../assets/icons/boobs-icon.svg";
import lightGallery from "../../assets/icons/gallery-light.svg";
import MyButton from "../../components/MyButton";
import { useSelector } from "react-redux";
import { StyledH1Deposit } from "../../styles/StyledH1";
import { useTranslation } from "react-i18next";

const DepositComponent = ({
  createCard,
  handleSubmitDeposit,
  paymentAmount,
  createCoin,
  paymentType,
}) => {
  const wallet = useSelector((state) => state.user.user.wallet);

  const { t } = useTranslation();
  const lng = t("deposit", { returnObjects: true });
  return (
    <StyledDeposit>
      <section className="deposit">
        <img className="deposit__icon-boobs" src={boobsIcon} alt="star" />
        <StyledH1Deposit>{lng["section header"]}</StyledH1Deposit>
        <div className="deposit__photos-available">
          <div className="deposit__photos-available-title">{lng["photos"]}</div>
          <div className="deposit__photos-available-gallery">
            <div className="deposit__icon-photo">
              <img src={lightGallery} alt="gallery" />
            </div>
            <span>{wallet}</span>
          </div>
          <p>
            {lng["processing"]} <br /> {lng["processing br"]}
          </p>
        </div>
        <p className="deposit__subtitle">{lng["choose"]}</p>
        <form onSubmit={handleSubmitDeposit} className="deposit__form">
          <ul className="deposit__unordered_list_type_coins">
            {paymentAmount?.map(createCoin)}
          </ul>
          <p className="deposit__form-title-payment">{lng["payment method"]}</p>
          <ul className="deposit__unordered_list_type_payment">
            {paymentType?.map(createCard)}
          </ul>
          <MyButton text={lng["pay btn"]} type={"pay"} />
        </form>
      </section>
    </StyledDeposit>
  );
};

export default DepositComponent;
