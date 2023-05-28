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
          <Value
            icon={gear}
            text="Our Mission"
            message=<p>
              Our mission is to become the preferred ROOFING company in Gauteng
              and to grow a sustainable business whilst utilising industry
              leading software and equipment to achieve our aims of providing
              our clients and shareholders with added value and our staff with
              safe and secure employment.
            </p>
          />
          <Value
            icon={brightBulb}
            text="Our Vision"
            message=<p>To promote excellence in everything we do.</p>
          />
          <Value
            icon={diamond}
            text="Our Values"
            message=<ul>
              <li>
                We will make a difference due to our owners&#39; personal
                involvement in the company.
              </li>
              <li>
                We will ensure that our clients are provided with a
                professionally designed, expertly manufactured and well erected
                roof.
              </li>
              <li>
                We will maintain our quality standards and thereby ensure that
                our SATAS quality mark is maintained.
              </li>
            </ul>
          />
        </div>
      </div>
      <div className="whatWeDo__side-image">
        <img src={person} alt="person" />
      </div>
    </div>
  );
};

export default WhatWeDo;
