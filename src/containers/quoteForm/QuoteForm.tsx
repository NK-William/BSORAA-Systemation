import React, { useState } from "react";
import "./quoteForm.css";
import { Entry, Button } from "../../components";
import emailjs from '@emailjs/browser';
import {SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY} from "../../privacy";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  
  const [loading, setLoading] = useState(false);

  const notifySuccess = () => toast("Successfully submitted!", {type: "success"});
  const notifyError = () => toast("An error occurred!", {type: "error"});

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(loading) {
      return;
    }

    setLoading(true);
    if(isValid()){
      const templatePrams = {
        from_name: `${name} ${surname}`,
        to_name: "BSORAA",
        message: `Contact number: ${contactNumber}\nEmail: ${email}\n\n${message}`,
        }

      emailjs.send(SERVICE_ID, TEMPLATE_ID, templatePrams, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          notifySuccess();
          clearForm();
        }, (error) => {
          console.log(error.text);
          notifyError();  
        });
        setLoading(false);
    }else{
      setLoading(false);
      return;
    }
  };

  const clearForm = () => {
    setName("");
    setSurname("");
    setEmail("");
    setContactNumber("");
    setMessage("");
  }

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

    const validEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if(email.trim() === "" || !validEmail){
      setEmailError(true);
      valid = false;
    }else{
      setEmailError(false);
    }

    const validContactNumber = String(contactNumber).match(/^0\d{9}$/);
    if(contactNumber.trim() === "" || !validContactNumber){
      setContactNumberError(true);
      valid = false;
    }else{
      setContactNumberError(false);
    }

    return valid;
  }

  return (
    <form className="quoteForm__container" onSubmit={handleSubmit}>
      <ToastContainer />
      <Entry title="Name" value={name} onTextChange={setName} showRequired error={nameError}/>
      <Entry title="Surname" value={surname} showRequired onTextChange={setSurname} error={surnameError}/>
      <Entry title="Email" value={email} showRequired onTextChange={setEmail} error={emailError}/>
      <Entry title="Contact number" value={contactNumber} showRequired onTextChange={setContactNumber} error={contactNumberError}/>
      <div className="quoteForm__text-area">
        <p className="quoteForm__message-title">Message</p>
        <textarea value={message} onChange={handleTextChange} />
      </div>
      <Button text="SUBMIT" />
    </form>
  );
};

export default QuoteForm;
