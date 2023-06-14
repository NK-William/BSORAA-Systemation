import React from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";
import { scrollPageUp } from "../../utils/global";

interface propType {
  text: string;
  scrollPageToTop?: boolean;
}

const Button = ({ text, scrollPageToTop}: propType) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quote");
    if(scrollPageToTop) scrollPageUp();
  }

  return (
    <div className="button__container">
      <button type="submit" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
