import React from "react";
import { Value } from "../../components";
import "./whatWeDo.css";
import { brightBulb, gear, diamond, project1, project2 } from "./imports";

const WhatWeDo = () => {
  return (
    <div className="whatWeDo__container">
      <div className="whatWeDo__left-container">
        <div className="whatWeDo__content">
          <h3>WHAT WE DO</h3>
          <ul className="whatWeDo__list">
            <li className="whatWeDo__list-title">CONTAINERS CONVERSION</li>
            <li className="whatWeDo__list-title">PROCESS CONTROL SYSTEMS</li>
            <ul className="whatWeDo__inner-list">
              <li>Siemens PLC programming.</li>
              <li>
                SCADA & HMI Design and Installation (Siemens Simatic WinCC,
                iFIX, Schneider Citect, Wonderware and Adroit Systems).
              </li>
              <li>
                Process Control Networks Maintenance, Installation and Design
                (ProfiNet, ProfiBus, Industrial Ethernet, etc).
              </li>
              <li>
                Integration of Multi-protocol Networks and Data acquisition
                (OPC).
              </li>
            </ul>
            <li className="whatWeDo__list-title">PROCESS INSTRUMENTATION</li>
            <ul className="whatWeDo__inner-list">
              <li>
                Supply, Installation, design and maintenance of all field
                instruments (E+H, Krohne, Vega, Siemens, ABB, Emerson, CiDRA,
                Process Automation, Thermofisher, etc).
              </li>
              <li>
                Providing reliable, maintenance friendly installation solutions
                to existing plants to reduce maintenance costs.
              </li>
              <li>Instrumentation Verification and Integrity checks.</li>
              <li>AS-i Network Instrumentation and Maintenance.</li>
            </ul>
            <li className="whatWeDo__list-title">SMART BUILDING AUTOMATION</li>
            <ul className="whatWeDo__inner-list">
              <li>
                Design, Installation, Maintenance of smart building projects and
                recommendations of systems suitable for various install areas
                (Mainly on HDL® BusPro and KNX networks).
              </li>
              <li>
                Integration of smart homes with security and monitoring systems.
              </li>
            </ul>
            <li className="whatWeDo__list-title"> GREEN ENERGY</li>
            <ul className="whatWeDo__inner-list">
              <li>Energy Analysis and systems recommendations.</li>
              <li>Solar powered system design and Installation.</li>
              <li>Solar power system maintenance, cleaning and upgrades.</li>
              <li>
                Energy Saving Solutions with Heat Pumps and Solar Geysers.
              </li>
            </ul>
          </ul>
        </div>
        <div className="whatWeDo__values">
          <h3>OUR VALUES</h3>
          <Value
            icon={gear}
            text="Our Mission"
            message=<p>
              We use the knowledge acquired through several years of experience
              in different fields such as mining, material processing,
              telecommunications to provide practical and reliable solutions for
              automation, industrial networks and measurements for the maximum
              benefits of our serviced clientele.
            </p>
          />
          <Value
            icon={brightBulb}
            text="Our Vision"
            message=<p>
              BSORAA seeks to be a future major role player in the field of
              Process Instrumentation Control Design & Engineering. Our growth
              as a brand seeks to embrace the continuously developing technology
              and provide long lasting solutions to various processes. Smart
              Build Engineering is one of the major focus areas in the world
              today and intend to make our footprint in that industry as well.
              Maximize on the prospects of employment creation through
              involvement in the private and public sector initiatives and
              opportunity areas
            </p>
          />
          <Value
            icon={diamond}
            text="Our Values"
            message=<ul className="whatWeDo__values-list">
              <li>Safety in Execution of Tasks</li>
              <li>Reliable, Detailed and Long Lasting Solutions.</li>
              <li>Ethical, Open and Honest in all we do</li>
            </ul>
          />
        </div>
      </div>
      <div>
        <div className="whatWeDo__side-image">
          <img src={project1} alt="project image" />
        </div>
        <div className="whatWeDo__side-image">
          <img src={project2} alt="project image" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
