import React from "react";
import "./workingWithUs.css";
import { Button } from "../../components";

const latLong = {
  latitude: 51.5074,
  longitude: 0.1278,
};

const WorkingWithUs = () => {
  return (
    <div className="workingWithUs__container">
      <div className="workingWithUs__dark-overlay"></div>
      <div className="workingWithUs__content">
        <h1>Working with us</h1>
        <p>We design, manufacture and install solars</p>
        <Button text="GET A QUOTE" />
      </div>
    </div>
  );
};

export default WorkingWithUs;
