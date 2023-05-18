import React from "react";
import { Value } from "../../components";
import "./whatWeDo.css";
import { brightBulb, gear, diamond, person } from "./imports";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo__container">
      <div className="whatWeDo__left-container">
        <div className="whatWeDo__content">
          <h3>WHAT WE DO</h3>
          <p>
            BSORA Systemation, in accordance with legislation, is a registered
            electrical contractor.
          </p>
          <p>
            We make no secret of the fact that LCP Solar does not install “cheap
            and nasty” and off-the-shelf solutions. We undertake a proper
            analysis of our client&#39;s requirements and design bespoke systems
            to their needs.
          </p>
          <p>
            Our design considerations and installations are according to or
            exceed national standards.
          </p>
        </div>
        <div className="whatWeDo__values">
          <h3>OUR VALUES</h3>
          <Value icon={gear} text="Our Mission" />
          <Value icon={brightBulb} text="Our Vision" />
          <Value icon={diamond} text="Our Values" />
        </div>
      </div>
      <div className="whatWeDo__side-image">
        <img src={person} alt="person" />
      </div>
    </div>
  );
};

export default WhatWeDo;
