import React from "react";
import "./projectImage.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

interface IProjectImages {
  projectImages: IProjectImage[];
}
interface IProjectImage {
  imageSrc: string;
  imageText: string;
}

const ProjectImage = ({ projectImages }: IProjectImages) => {
  const [imageIndex, setImageIndex] = React.useState(0);
  const { imageSrc, imageText } = projectImages[imageIndex];

  const handleNextClick = () => {
    console.log("next");
    setImageIndex(imageIndex + 1);
  };

  const handlePrevClick = () => {
    console.log("prev");
    setImageIndex(imageIndex - 1);
  };

  return (
    <div className="projectImage__image">
      <div className="projectImage__image-container">
        <img src={imageSrc} alt={imageText} />
      </div>
      <h3>{imageText}</h3>
      {imageIndex > 0 && (
        <div
          onClick={() => handlePrevClick()}
          className="projectImage__left-arrow"
        >
          <img src={leftArrow} alt="left arrow" />
        </div>
      )}
      {imageIndex < projectImages.length - 1 && (
        <div
          onClick={() => handleNextClick()}
          className="projectImage__right-arrow"
        >
          <img src={rightArrow} alt="right arrow" />
        </div>
      )}
    </div>
  );
};

export default ProjectImage;
