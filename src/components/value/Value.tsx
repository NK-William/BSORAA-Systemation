import React from "react";
import "./value.css";
import add from "../../assets/add.png";

interface valueProps {
  icon: string;
  text: string;
}

const Value = ({ icon, text }: valueProps) => {
  console.log(icon);
  return (
    <div className="value__container">
      <div className="value__container-title">
        <div className="value__left-content">
          <img src={icon} />
          <p>{text}</p>
        </div>
        <img src={add} className="value__right-icon" />
      </div>
      <div className="value__container-content">
        <p>
          Our mission is to become the preferred ROOFING company in Gauteng and
          to grow a sustainable business whilst utilising industry leading
          software and equipment to achieve our aims of providing our clients
          and shareholders with added value and our staff with safe and secure
          employment.
        </p>
      </div>
    </div>
  );
};

export default Value;
