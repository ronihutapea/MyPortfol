import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#ffff", marginRight: "2rem" }} />
            <div>
              <p>Banten, Kota Tengerang Selatan</p>
              <p>Pondok Aren</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />
              0822-7367-1785
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />
              hutapearoni64@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            Hi! I’m Irvan, a student and aspiring backend developer. This
            portfolio is where I share my projects, experiments, and progress as
            I continue learning web development.
          </p>
          <div className="social">
            <a
              href="https://web.facebook.com/profile.php?id=100075738544053"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://www.instagram.com/vanhutapea_15/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaInstagramSquare
              size={30}
              style={{ color: "#ffff", marginRight: "1rem" }}
            />
            </a>

            <a
              href="https://www.linkedin.com/in/roni-hutapea-79b130339/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin
              size={30}
              style={{ color: "#ffff", marginRight: "1rem" }}
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
