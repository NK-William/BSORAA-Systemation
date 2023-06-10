import React, {useEffect} from "react";
import { PageTitle, Navbar } from "../components";
import { PrivacyPolicyContent, Footer } from "../containers";

const PrivacyPolicy = () => {
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
