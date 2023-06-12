import React, { useState } from "react";
import "./quoteForm.css";
import { Entry, Button } from "../../components";

const QuoteForm = () => {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactNumberError, setContactNumberError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(isValid()){
      // submit
      console.log("name: ",name);
      console.log("surname: ",surname);
      console.log("email: ",email);
      console.log("contactNumber: ",contactNumber);
      console.log("message: ",message);
    }else{
      return;
    }

  };

  const isValid= () => {
    let valid = true;
    if(name.trim() === ""){
      setNameError(true);
      valid = false;
    }else{
      setNameError(false);
    }

    if(surname.trim() === ""){
      setSurnameError(true);
      valid = false;
    }else{
      setSurnameError(false);
    }

    if(email.trim() === ""){
      setEmailError(true);
      valid = false;
    }else{
      setEmailError(false);
    }

    if(contactNumber.trim() === ""){
      setContactNumberError(true);
      valid = false;
    }else{
      setContactNumberError(false);
    }

    if(message.trim() === ""){
      setMessageError(true);
      valid = false;
    }else{
      setMessageError(false);
    }

    return valid;
  }

  return (
    <form className="quoteForm__container" onSubmit={handleSubmit}>
      <Entry title="Name" value={name} onTextChange={setName} showRequired error={nameError}/>
      <Entry title="Surname" value={surname} showRequired onTextChange={setSurname} error={surnameError}/>
      <Entry title="Email" value={email} showRequired onTextChange={setEmail} error={emailError}/>
      <Entry title="Contact number" value={contactNumber} showRequired onTextChange={setContactNumber} error={contactNumberError}/>
      <div className="quoteForm__text-area">
        <p className="quoteForm__message-title">Message</p>
        <textarea value={message} onChange={handleTextChange} />
        {messageError && <p className="entry__error-text">Message is required</p>}
      </div>
      <Button text="SUBMIT" />
    </form>
  );
};

export default QuoteForm;
