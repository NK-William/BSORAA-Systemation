import React, { useState } from "react";
import "./navbar.css";
import icon from "../../assets/icon.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { scrollPageUp } from "../../utils/global";

const GetMenuOptions = () => {
 
  return (<>
    <p>
      <Link to="/" onClick={scrollPageUp}>Home</Link>
    </p>
    <p>
      <Link to="/about-us" onClick={scrollPageUp}>About Us</Link>
    </p>
    <p>
      <Link to="/privacy-policy" onClick={scrollPageUp}>Policies</Link>
    </p>
    <p>
      <Link to="/projects" onClick={scrollPageUp}>Projects</Link>
    </p>
    <p>
      <Link to="/quote" onClick={scrollPageUp}>Quote</Link>
    </p>
  </>)
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="navbar__container">
        <Link to="/" onClick={scrollPageUp}>
          <img src={icon} alt="app-icon" height={45} />
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
