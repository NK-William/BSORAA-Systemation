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
        <p>We design, maintain and install PV system</p>
        <Button text="GET A QUOTE" scrollPageToTop />
      </div>
    </div>
  );
};

export default WorkingWithUs;
