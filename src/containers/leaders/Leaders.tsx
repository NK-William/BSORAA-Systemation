import React from "react";
import "./leaders.css";
import { Button, Person } from "../../components";
import { manager, operator } from "./imports";

const Leaders = () => {
  return (
    <div className="leaders__container">
      <div className="leaders__title">
        <h2>
          BSORAA in accordance with legislation, is a registered electrical
          contractor.
        </h2>
        <Button text="GET A QUOTE" scrollPageToTop/>
      </div>
      <div className="leaders__content">
        <Person
          image={manager}
          nameSurname="Lara Mina"
          role="Management Director"
        />
        <div className="leaders__divider" />
        <Person
          image={operator}
          nameSurname="John Zeek"
          role="Operator Director"
        />
      </div>
    </div>
  );
};

export default Leaders;
