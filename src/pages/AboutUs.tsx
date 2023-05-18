import React from "react";
import { Navbar, PageTitle } from "../components";
import { WhatWeDo, Leaders, Footer } from "../containers";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <PageTitle />
      <WhatWeDo />
      <Leaders />
      <Footer />
    </div>
  );
};

export default AboutUs;
