import React, {useEffect} from "react";
import { Navbar, PageTitle } from "../components";
import { QuoteContainer } from "../containers";
import { Link, useLocation } from "react-router-dom";

const Quote = () => {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <PageTitle title="Quote" />
      <QuoteContainer />
    </div>
  );
};

export default Quote;
