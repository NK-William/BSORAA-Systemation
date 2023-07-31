import React from "react";
import "./contacts.css";
import { phone, email, location, clock, close } from "./imports";

const Contacts = () => {
  return (
    <div className="contacts__container">
      <div>
        <img src={phone} alt="Phone" />
        <p>015 250 0100</p>
      </div>
      <div>
        <img src={email} alt="Email" />
        <p>info@bsoraasystemation.co.za</p>
      </div>
      <div>
        <img src={location} alt="Location" />
        <p>112 river, Polokwane, 0700</p>
      </div>
      <div>
        <img src={clock} alt="Clock" />
        <p>Mon-Fri 07:00 - 16:00</p>
      </div>
      <div>
        <img src={close} alt="Close" />
        <p>Closed Saturdays, Sundays and public Holidays</p>
      </div>
    </div>
  );
};

export default Contacts;
