import React from "react";
import "./header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { banner1, banner2, banner3, banner4 } from "./imports";
import { Button } from "../../components";

const Header = () => {
  return (
    <div className="header__container">
      <div className="banner__image-container">
        <Carousel
          showArrows
          showIndicators
          showThumbs={false}
          showStatus={false}
          dynamicHeight
          autoPlay
          interval={4000}
          infiniteLoop
        >
          <img src={banner1} alt="banner one" />
          <img src={banner2} alt="banner two" />
          <img src={banner3} alt="banner three" />
          <img src={banner4} alt="banner four" />
        </Carousel>
      </div>
      <div className="header__banner-text__container">
        <h1>
          CUSTOMER FOCUSED
          <br /> SOLAR SOLUTION
        </h1>
        <Button text="GET A QUOTE" />
      </div>
    </div>
  );
};

export default Header;
