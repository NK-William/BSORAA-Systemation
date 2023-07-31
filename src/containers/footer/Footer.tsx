import React, { useState } from "react";
import "./footer.css";
import {
  whatsApp,
  instagram,
  phone,
  email,
  location,
  clock,
  close,
  QRCode,
} from "./imports";
import { Link } from "react-router-dom";
import { scrollPageUp } from "../../utils/global";

const Footer = () => {
  const [isQRCodeVisible, setIsQRCodeVisible] = useState(false);

  const handleQRCodeVisibility = () => {
    setIsQRCodeVisible(true);
    setTimeout(() => {
      setIsQRCodeVisible(false);
    }, 5000);
  };

  return (
    <div className="footer__container">
      <div className="footer__first-section">
        <div className="footer__about-company">
          <h3>BSORAA SYSTEMATION</h3>
          <div />
          <p>
            BSORAA systemation offers a complete energy solution for domestic,
            commercial and industrial projects. We also offer solutions for
            plant automation, instrumentation and control with a view of
            simplifying the usage of electricity while maximising the benefits
            and usage of green energy wherever possible.
          </p>
        </div>
        <div className="footer__quicklinks">
          <h3>QUICKLINKS</h3>
          <div />
          <ul>
            <li>
              <Link to="/" onClick={scrollPageUp}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={scrollPageUp}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={scrollPageUp}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/quote" onClick={scrollPageUp}>
                Quote
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <div className="footer__social-media">
            <img
              src={whatsApp}
              alt="WhatsApp"
              onClick={handleQRCodeVisibility}
            />
            <a
              href="https://instagram.com/systemationbsoraa?igshid=NGExMmI2YTkyZg=="
              target="_blank"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <div className="footer__contacts-info">
            <div>
              <img src={phone} alt="Phone" />
              <p>015 250 0100</p>
            </div>
            <div>
              <img src={email} alt="Email" />
              <p>info@bsoraasystemation.co.za</p>
            </div>
            <div>
              <img src={location} alt="Location" />
              <p>112 river, Polokwane, 0700</p>
            </div>
            <div>
              <img src={clock} alt="Clock" />
              <p>Mon-Fri 07:00 - 16:00</p>
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
          BSORAA Systemation: 13 Taurus Avenue - Sterpark - Polokwane - Limpopo
          - South Africa
        </p>
        <div>
          <p>
            <Link to="/privacy-policy" onClick={scrollPageUp}>
              Privacy Policy
            </Link>
          </p>
          {/* <p>Terms of Use</p> */}
        </div>
      </div>
      {isQRCodeVisible && (
        <div className="footer__QR-code__container">
          <img src={QRCode} alt="WhatsApp QR code" />
        </div>
      )}
    </div>
  );
};

export default Footer;
