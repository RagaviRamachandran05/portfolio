import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-intro">
        I’d love to hear from you! Whether you have a project idea, a question,
        or just want to say hello — feel free to reach out. 💬
      </p>

      {/* Left & Right Section Wrapper */}
      <div className="contact-wrapper">
        {/* Left: Contact Form */}
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Social Section */}
        <div className="contact-socials">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon github">
              <FaGithub />
            </a>
            <a href="mailto:rragavi054@gmail.com" className="icon email">
              <FaEnvelope />
            </a>
          </div>
          <div className="contact-info">
            <p><strong>Email:</strong> rragavi054@gmail.com</p>
            <p><strong>Available for:</strong> Internships & Freelance Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
