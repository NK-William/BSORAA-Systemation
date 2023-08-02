import React, { useEffect } from "react";
import { Navbar } from "../components";
import {
  Header,
  ServicesSection,
  HomeProjects,
  WorkingWithUs,
  Footer,
} from "../containers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ServicesSection />
      <HomeProjects />
      <WorkingWithUs />
      <Footer />
    </div>
  );
};

export default Home;
