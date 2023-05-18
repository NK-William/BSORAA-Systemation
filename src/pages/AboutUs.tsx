import React from "react";
import { Navbar, PageTitle } from "../components";
import { WhatWeDo, Leaders } from "../containers";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <PageTitle />
      <WhatWeDo />
      <Leaders />
    </div>
  );
};

export default AboutUs;
