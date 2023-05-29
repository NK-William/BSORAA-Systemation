import React from "react";
import { Navbar, Chatbot } from "../components";
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
      <Chatbot />
    </div>
  );
};

export default Home;
