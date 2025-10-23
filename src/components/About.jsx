import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

     

      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I am a dedicated Information Technology student with a strong passion 
            for web development and design. I specialize in creating responsive, 
            user-friendly web applications that seamlessly combine functionality 
            with elegant design.
          </p>

          <p>
            My expertise includes Frontend Development using React, JavaScript, 
            HTML, and CSS, along with a keen eye for UI/UX design. I enjoy 
            solving complex problems, learning new technologies, and delivering 
            meaningful digital experiences.
          </p>

          <p>
            I thrive in collaborative environments and continuously strive to 
            enhance my skills to meet the ever-evolving demands of the tech 
            industry. My goal is to build innovative web solutions that make a 
            positive impact.
          </p>

          <a href="#" className="btn resume-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
