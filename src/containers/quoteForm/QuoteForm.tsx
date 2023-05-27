import React, { FormEvent } from "react";
import "./quoteForm.css";
import { Entry } from "../../components";

const QuoteForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <form className="quoteForm__container" onSubmit={handleSubmit}>
      <Entry title="Name" value="" showRequired />
      <Entry title="Surname" value="" showRequired />
      <Entry title="Email" value="" showRequired />
      <Entry title="Contact number" value="" showRequired />
      <Entry title="Subject" value="" />
      <div className="quoteForm__text-area">
        <p className="quoteForm__message-title">Message</p>
        <textarea value="" onChange={() => {}} />
        {/* <p className="entry__error-text">Message is required</p> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuoteForm;