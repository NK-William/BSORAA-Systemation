import React from "react";
import { Navbar } from "../components";
import {
  Header,
  ServicesSection,
  Projects,
  WorkingWithUs,
  Footer,
} from "../containers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ServicesSection />
      <Projects />
      <WorkingWithUs />
      <Footer />
    </div>
  );
};

export default Home;
