import React from "react";
import { Value } from "../../components";
import "./whatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo__container">
      <div className="whatWeDo__content">
        <h3>WHAT WE DO</h3>
        <p>
          BSORA Systemation, in accordance with legislation, is a registered
          electrical contractor.
        </p>
        <p>
          We make no secret of the fact that LCP Solar does not install “cheap
          and nasty” and off-the-shelf solutions. We undertake a proper analysis
          of our client&#39;s requirements and design bespoke systems to their
          needs.
        </p>
        <p>
          Our design considerations and installations are according to or exceed
          national standards.
        </p>
        <h3 className="whatWeDo__values-text">OUR VALUES</h3>
        <Value />
        <Value />
        <Value />
      </div>
      <div className="whatWeDo__side-image"></div>
    </div>
  );
};

export default WhatWeDo;
