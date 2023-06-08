import React, {useEffect} from "react";
import { Navbar, PageTitle } from "../components";
import {
  ProjectsSection,
  QuoteButtonTextContainer,
  Footer,
} from "../containers";
import { Link, useLocation } from "react-router-dom";

const Projects = () => {
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <PageTitle title="Project" />
      <ProjectsSection />
      <QuoteButtonTextContainer />
      <Footer />
    </div>
  );
};

export default Projects;
