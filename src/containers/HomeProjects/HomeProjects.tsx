import React from "react";
import "./homeProjects.css";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "./imports";

const HomeProjects = () => {
  return (
    <div className="projects__container">
      <div className="projects__header">
        <h2>Projects</h2>
        <div />
      </div>
      <div className="projects__content">
        <div>
          <img src={project1} />
        </div>
        <div>
          <img src={project2} />
        </div>
        <div>
          <img src={project3} />
        </div>
        <div>
          <img src={project4} />
        </div>
        <div>
          <img src={project5} />
        </div>
        <div>
          <img src={project6} />
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
