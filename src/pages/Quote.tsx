import React, {useEffect} from "react";
import { Navbar, PageTitle } from "../components";
import { QuoteContainer } from "../containers";

const Quote = () => {
  return (
    <div>
      <Navbar />
      <PageTitle title="Quote" />
      <QuoteContainer />
    </div>
  );
};

export default Quote;
