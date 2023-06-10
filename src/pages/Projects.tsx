import React, {useEffect} from "react";
import { Navbar, PageTitle } from "../components";
import {
  ProjectsSection,
  QuoteButtonTextContainer,
  Footer,
} from "../containers";

const Projects = () => {
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
