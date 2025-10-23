import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2>© 2025 My Portfolio</h2>
          <p>Designed & Developed by Ragavi</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p>😊 Thank you for visiting!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
