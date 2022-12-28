import React from "react";

const CardContent = ({ data }) => {
  const { name, id } = data;
  const paymentIcon = `${process.env.REACT_APP_BASE_URL}/icons?id=${id}`;

  return (
    <div className="payment_method">
      <img src={paymentIcon} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default CardContent;
