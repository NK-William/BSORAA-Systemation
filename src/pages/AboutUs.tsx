import React, { useEffect } from "react";
import { Navbar, PageTitle, QuoteButtonText } from "../components";
import { WhatWeDo, QuoteButtonTextContainer, Footer } from "../containers";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <PageTitle title="ABOUT BSORAA SYSTEMATION" />
      <WhatWeDo />
      <QuoteButtonTextContainer />
      <Footer />
    </div>
  );
};

export default AboutUs;
