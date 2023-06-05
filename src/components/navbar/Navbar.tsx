import React, { useState } from "react";
import "./navbar.css";
import icon from "../../assets/icon.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const GetMenuOptions = () => (
  <>
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
  </>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="navbar__container">
        <Link to="/">
          <img src={icon} alt="icon" height={45} />
        </Link>
        <div className="navbar__menu-container">
          {showMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
        <nav className="navbar__link-container">
          <GetMenuOptions />
        </nav>
      </div>
      {showMenu && (
        <div className="navbar__menu-popup scale-up-center">
          <GetMenuOptions />
        </div>
      )}
    </div>
  );
};

export default Navbar;
