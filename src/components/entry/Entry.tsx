import React from "react";
import "./entry.css";

interface IEntry {
  title: string;
  showRequired?: boolean;
  value?: string;
  onTextChange: (text: string) => void;
  error?: boolean;
}

function Entry({ title, showRequired, value, onTextChange, error }: IEntry) {

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onTextChange(e.target.value);
  }

  return (
    <div className="entry__container">
      <p className="entry__title">
        {title}
        <span>{showRequired && "(required)"}</span>
      </p>
      <input type="text" value={value} onChange={handleTextChange} />
      {(error && showRequired) &&
      <p className="entry__error-text">{(title === "Email" || title === "Contact number" )?
       `A valid ${title.toLocaleLowerCase()} is required`
      :
      `${title} is required`}</p>}
    </div>
  );
}

export default Entry;
