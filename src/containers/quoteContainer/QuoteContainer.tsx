import React from "react";
import "./quoteContainer.css";
import { Map } from "../../components";
import { Contacts, QuoteForm, Footer } from "../../containers";

const QuoteContainer = () => {
  return (
    <div className="quoteContainer__container">
      <div className="quoteContainer__content">
        <div className="quoteContainer__mapContacts-container">
          <Map />
          <Contacts />
        </div>
        <div className="quoteContainer__vertical-divider" />
        <div className="quoteContainer__form-container">
          <QuoteForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuoteContainer;
