import React from "react";
import "./Certificate.css";

const Certificate = () => {
  const certificates = [
    {
      title: "HTML",
      link: "https://www.mygreatlearning.com/certificate/CHLSRBVZ?referrer_code=GLEQT9RYXCO88",
      description:
        "Completed an HTML course covering structure, elements, and semantic markup for web development.",
    },
    {
      title: "CSS Tutorial",
      link: "https://www.mygreatlearning.com/certificate/EQLYMPVE?referrer_code=GLEQT9RYXCO88",
      description:
        "Learned styling, layouts, and responsive design using CSS for modern web pages.",
    },
    {
      title: "Front End-CSS",
      link: "https://www.mygreatlearning.com/certificate/OCFIGHUC?referrer_code=GLEQT9RYXCO88",
      description:
        "Mastered front-end development with emphasis on CSS frameworks and design principles.",
    },
    {
      title: "Java Concept",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01384793912231526456522_shared/1-de7091f7-8ab1-487a-bf81-56647cc34a01.pdf",
      description:
        "Acquired fundamental knowledge of Java programming and object-oriented concepts.",
    },
    {
      title: "Introduction to Prompt Engineering",
      link: "https://simpli-web.app.link/e/O1ayh97BFXb",
      description:
        "Learned prompt engineering techniques to interact effectively with AI language models.",
    },
    {
      title: "Octanet Internship Certificate",
      link: "/octanet_certificate.pdf", // place your PDF in public folder
      description:
        "Successfully completed a web development internship.",
    },
    {
      title: "CodeTech Internship Certificate",
      link: "/codetech.pdf", // place your PDF in public folder
      description:
        "Completed three real world java project",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <h2 className="section-title">My Certificates</h2>
      <p className="section-subtitle">
        A collection of my verified achievements and certifications 📜
      </p>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h4>{cert.title}</h4>
            <p>{cert.description}</p>
            <a
              href={cert.link}
              className="view-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
