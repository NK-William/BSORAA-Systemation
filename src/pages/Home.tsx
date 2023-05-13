import React from "react";
import { Navbar } from "../components";
import { Header, ServicesSection } from "../containers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ServicesSection />
    </div>
  );
};

export default Home;
