import React, {useEffect} from "react";
import { PageTitle, Navbar } from "../components";
import { PrivacyPolicyContent, Footer } from "../containers";
import { Link, useLocation } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <PageTitle title="Privacy Policy" />
      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
