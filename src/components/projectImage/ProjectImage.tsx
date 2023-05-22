import React from "react";
import "./projectImage.css";

interface IProjectImage {
  imageSrc: string;
  imageText: string;
}

const ProjectImage = ({ imageSrc, imageText }: IProjectImage) => {
  return (
    <div className="projectImage__image">
      <div className="projectImage__image-container">
        <img src={imageSrc} alt={imageText} />
      </div>
      <h3>{imageText}</h3>
    </div>
  );
};

export default ProjectImage;
