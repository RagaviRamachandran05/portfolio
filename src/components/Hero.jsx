import React from "react";
import "./Hero.css";
import profilePic from "/public/photo.jpg"; // 👈 import your image here

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Ragavi</span>
        </h1>
        <h2>A Passionate Web Developer & Designer</h2>
        <p>
          I create modern, responsive websites that combine beautiful design
          with clean, efficient code.
        </p>

        <div className="hero-buttons">
          <button className="btn primary-btn">View My Work</button>
          <button className="btn secondary-btn">
            <a href="#contact">Contact</a>
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={profilePic} alt="profile" />
      </div>
    </section>
  );
};

export default Hero;
