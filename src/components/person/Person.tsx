import React from "react";
import "./person.css";
import { facebook, linkedIn, instagram } from "./imports";

interface personPops {
  image: string;
  nameSurname: string;
  role: string;
}

const Person = ({ image, nameSurname, role }: personPops) => {
  return (
    <div className="person__container">
      <div className="person__image">
        <img src={image} alt="person" />
      </div>
      <p>{nameSurname}</p>
      <p>{role}</p>
      <div className="person__social-media">
        <img src={facebook} alt="Facebook" />
        <img src={linkedIn} alt="LinkedIn" />
        <img src={instagram} alt="Instagram" />
      </div>
    </div>
  );
};

export default Person;
