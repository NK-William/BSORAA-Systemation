import React from "react";
import "./navbar.css";
import icon from "../../assets/icon.png";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <img src={icon} alt="icon" height={45} />
      <div className="navbar__link-container">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#about us">About Us</a>
        </p>
        <p>
          <a href="#policies">Policies</a>
        </p>
        <p>
          <a href="#projects">Projects</a>
        </p>
        <p>
          <a href="#quote">Quote</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
