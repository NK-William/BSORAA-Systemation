import React, {useEffect} from "react";
import "./footer.css";
import {
  facebook,
  linkedin,
  instagram,
  phone,
  email,
  location,
  clock,
  close,
} from "./imports";
import { Link } from "react-router-dom";
import { scrollPageUp } from "../../utils/global";

const Footer = () => {

  // const pageLocation = useLocation();
  // useEffect(() => { 
  //   window.scrollTo(0, 0);
  // }, 
  // [pageLocation.pathname])

  return (
    <div className="footer__container">
      <div className="footer__first-section">
        <div className="footer__about-company">
          <h3>BSORAA SYSTEMATION</h3>
          <div />
          <p>
            BSORAA systemation offers a complete roofing solution. This inclides
            not only the designing, manufacturing and deliver of the timber roof
            trusses but also the supplying and installation of various types of
            roof coverings, such as concrete roofs tiles and metal roof
            sheeting.
          </p>
        </div>
        <div className="footer__quicklinks">
          <h3>QUICKLINKS</h3>
          <div />
          <ul>
            <li><Link to="/" onClick={scrollPageUp}>Home</Link></li>
            <li><Link to="/about-us" onClick={scrollPageUp}>About Us</Link></li>
            <li><Link to="/privacy-policy" onClick={scrollPageUp}>Projects</Link></li>
            <li><Link to="/quote" onClick={scrollPageUp}>Quote</Link></li>
          </ul>
        </div>
        <div className="footer__contacts">
          <div className="footer__social-media">
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
          </div>
          <div className="footer__contacts-info">
            <div>
              <img src={phone} alt="Phone" />
              <p>012 332 563</p>
            </div>
            <div>
              <img src={email} alt="Email" />
              <p>quote@broraa.co.za</p>
            </div>
            <div>
              <img src={location} alt="Location" />
              <p>Plot 302 Zwavelpoort, PTA East</p>
            </div>
            <div>
              <img src={clock} alt="Clock" />
              <p>Mon-Fri 07:00 - 16:30</p>
            </div>
            <div>
              <img src={close} alt="Close" />
              <p>Closed Saturdays, Sundays and public Holidays</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__second-section">
        <p className="footer__copyright-text">
          Copyright 2021 Avanti Software. Inc. All rights reserved
        </p>
        <div>
          <p><Link to="/privacy-policy" onClick={scrollPageUp}>Privacy Policy</Link></p>
          {/* <p>Terms of Use</p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
