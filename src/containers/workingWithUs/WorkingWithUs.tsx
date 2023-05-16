import React from "react";
import "./workingWithUs.css";
import { Button } from "../../components";

const WorkingWithUs = () => {
  return (
    <div className="workingWithUs__container">
      <div className="dark-overlay"></div>
      <div className="content">
        <h1>Working with us</h1>
        <p>We design, manufacture and install solars</p>
        <Button text="GET A QUOTE" />
      </div>
    </div>
  );
};

export default WorkingWithUs;