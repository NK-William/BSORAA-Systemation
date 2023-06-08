import React, {useEffect} from "react";
import { Navbar, PageTitle } from "../components";
import { WhatWeDo, Leaders, Footer } from "../containers";
import { Link, useLocation } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);
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
