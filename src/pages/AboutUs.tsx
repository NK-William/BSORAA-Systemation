import React, {useEffect} from "react";
import { Navbar, PageTitle } from "../components";
import { WhatWeDo, Leaders, Footer } from "../containers";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <PageTitle title="ABOUT BSORAA SYSTEMATION" />
      <WhatWeDo />
      <Leaders />
      <Footer />
    </div>
  );
};

export default AboutUs;
