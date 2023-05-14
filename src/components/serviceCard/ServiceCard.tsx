import React from "react";
import "./serviceCard.css";
import tick from "../../assets/tick.png";

interface propsType {
  title: string;
  text: string;
}

const ServiceCard = ({ title, text }: propsType) => {
  return (
    <div className="serviceCard__container">
      <div className="serviceCard__title">
        <img src={tick} alt="tick" />
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
