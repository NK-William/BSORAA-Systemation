import React from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";

interface propType {
  text: string;
}

const Button = ({ text }: propType) => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/quote");

  return (
    <div className="button__container">
      <button type="submit" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
