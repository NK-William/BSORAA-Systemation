import React from "react";
import "./projectsSection.css";
import { ProjectImage } from "../../components";
import {
  project1,
  project2,
  project3,
  transport,
  instrumentation1,
  instrumentation2,
  container1,
  container2,
  container3,
  container4,
  container5,
  container6,
  container7,
  container8,
  container9,
  container10,
  container11,
  container12,
  container13,
  container14,
} from "./imports";

interface IProjectImage {
  imageSrc: string;
  imageText: string;
}

const containers: IProjectImage[] = [
  { imageSrc: container1, imageText: "Containers" },
  { imageSrc: container2, imageText: "Containers" },
  { imageSrc: container3, imageText: "Containers" },
  { imageSrc: container4, imageText: "Containers" },
  { imageSrc: container5, imageText: "Containers" },
  { imageSrc: container6, imageText: "Containers" },
  { imageSrc: container7, imageText: "Containers" },
  { imageSrc: container8, imageText: "Containers" },
  { imageSrc: container9, imageText: "Containers" },
  { imageSrc: container10, imageText: "Containers" },
  { imageSrc: container11, imageText: "Containers" },
  { imageSrc: container12, imageText: "Containers" },
  { imageSrc: container13, imageText: "Containers" },
  { imageSrc: container14, imageText: "Containers" },
];

const instrumentations: IProjectImage[] = [
  { imageSrc: instrumentation1, imageText: "Instrumentations" },
  { imageSrc: instrumentation2, imageText: "Instrumentations" },
];

const residentials: IProjectImage[] = [
  { imageSrc: project1, imageText: "Residential" },
];

const transports: IProjectImage[] = [
  { imageSrc: transport, imageText: "Transport" },
];

const ProjectsSection = () => {
  return (
    <div className="projectsSection__container">
      <div className="projectsSection__images-container">
        <ProjectImage projectImages={containers} />
        <ProjectImage projectImages={instrumentations} />
        <ProjectImage projectImages={residentials} />
        <ProjectImage projectImages={transports} />
      </div>
    </div>
  );
};

export default ProjectsSection;
