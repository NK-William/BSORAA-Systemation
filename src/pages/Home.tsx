import React, {useEffect} from "react";
import { Navbar, Chatbot } from "../components";
import {
  Header,
  ServicesSection,
  HomeProjects,
  WorkingWithUs,
  Footer,
} from "../containers";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);
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
