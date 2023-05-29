import React from "react";
import "./navbar.css";
import icon from "../../assets/icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <img src={icon} alt="icon" height={45} />
      <nav className="navbar__link-container">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/about-us">About Us</Link>
        </p>
        <p>
          <Link to="/privacy-policy">Policies</Link>
        </p>
        <p>
          <Link to="/projects">Projects</Link>
        </p>
        <p>
          <Link to="/quote">Quote</Link>
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
