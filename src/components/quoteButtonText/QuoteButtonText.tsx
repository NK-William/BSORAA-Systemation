import React from "react";
import { Button } from "..";
import "./quoteButtonText.css";

const QuoteButtonText = () => {
  return (
    <div className="quoteButtonText__container">
      <h2>
        BSORAA in accordance with legislation, is a registered electrical
        contractor.
      </h2>
      <Button text="GET A QUOTE" />
    </div>
  );
};

export default QuoteButtonText;
