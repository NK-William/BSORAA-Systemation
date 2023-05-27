import React from "react";
import "./contacts.css";
import { phone, email, location, clock, close } from "./imports";

const Contacts = () => {
  return (
    <div className="contacts__container">
      <div>
        <img src={phone} alt="Phone" />
        <p>012 332 563</p>
      </div>
      <div>
        <img src={email} alt="Email" />
        <p>quote@broraa.co.za</p>
      </div>
      <div>
        <img src={location} alt="Location" />
        <p>Plot 302 Zwavelpoort, PTA East</p>
      </div>
      <div>
        <img src={clock} alt="Clock" />
        <p>Mon-Fri 07:00 - 16:30</p>
      </div>
      <div>
        <img src={close} alt="Close" />
        <p>Closed Saturdays, Sundays and public Holidays</p>
      </div>
    </div>
  );
};

export default Contacts;
