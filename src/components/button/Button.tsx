import React from "react";
import "./button.css";

interface propType {
  text: string;
}

const Button = ({ text }: propType) => {
  return (
    <div className="button__container">
      <button type="submit">{text}</button>
    </div>
  );
};

export default Button;
