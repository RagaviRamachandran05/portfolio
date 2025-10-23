import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        Ragavi
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skill</a>
        <a href="#certificate">Certificate</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
