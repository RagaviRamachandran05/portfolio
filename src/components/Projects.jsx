import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "LaundryHub",
      image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
      description:
        "A web-based platform that connects users with local laundry services for scheduling, pickup, and delivery. Built to simplify daily chores through smart scheduling and order tracking.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      title: "MediMonitor",
      image: "https://static.thenounproject.com/png/doctor-icon-7489317-512.png",
      description:
        "An online medicine information and pill identification platform that helps users access dosage, uses, side effects, and tablet identification by imprint, color, and shape.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "SQL"],
      link: "#",
      github: "#",
    },
    {
      title: "Plagiarism Detection",
      image: " https://cdn-icons-png.flaticon.com/512/2910/2910763.png",
      
      description:
        "A desktop application using N-gram and Cosine Similarity to detect plagiarism in documents. It provides similarity percentage and highlights matching text segments.",
      tech: ["Java", "Swing", "N-gram", "Cosine Similarity"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="tech-stack">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div className="project-links">
                <a href={project.link} target="_blank" className="btn view-btn">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" className="btn code-btn">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
