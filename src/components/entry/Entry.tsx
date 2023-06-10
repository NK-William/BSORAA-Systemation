import React from "react";
import "./entry.css";

interface IEntry {
  title: string;
  showRequired?: boolean;
  value?: string;
}

function Entry({ title, showRequired, value }: IEntry) {
  return (
    <div className="entry__container">
      <p className="entry__title">
        {title}
        <span>{showRequired && "(required)"}</span>
      </p>
      <input type="text" onChange={() => {}} />
      {/* <p className="entry__error-text">Name is required</p> */}
    </div>
  );
}

export default Entry;
