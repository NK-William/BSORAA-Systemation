import React from "react";
import "./projectsSection.css";
import { ProjectImage } from "../../components";
import { project1 } from "./imports";
import { project2 } from "./imports";
import { project3 } from "./imports";
import { project4 } from "./imports";
import { project5 } from "./imports";
import { project6 } from "./imports";

const ProjectsSection = () => {
  return (
    <div className="projectsSection__container">
      <div className="projectsSection__images-container">
        <ProjectImage imageSrc={project1} imageText="Residential" />
        <ProjectImage imageSrc={project2} imageText="Commercial" />
        <ProjectImage imageSrc={project3} imageText="Exposed" />
        <ProjectImage imageSrc={project4} imageText="Manufacturing" />
        <ProjectImage imageSrc={project5} imageText="Farm" />
        <ProjectImage imageSrc={project6} imageText="Transport" />
      </div>
    </div>
  );
};

export default ProjectsSection;
