import React from 'react'
import './Projects.css'
import ecom from "../../assets/e-commrece.png"
import port from "../../assets/portfolio.png"
import ai from "../../assets/aicodeimg.png"
import store from "../../assets/store.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js. Features include user authentication, product management, shopping cart, and payment integration.",
      image: ecom,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveLink: "https://e-commerce-mu-ebon.vercel.app/",
      githubLink: "https://github.com/DARSHAN-6674/E-commerce-"
    },
    {
      id: 2,
      title: "StoreHub",
      description: "A modern e-commerce platform with advanced features including inventory management, user authentication, and seamless shopping experience.",
      image: store, // You can replace this with a specific StoreHub image
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "#", // Add your live link here
      githubLink: "https://github.com/Darshanraval2/StoreHub-.git" // Add your GitHub link here
    },
    {
      id: 3,
      title: "AI Code Reviewer",
      description: "An intelligent code review tool powered by AI that analyzes code quality, suggests improvements, and identifies potential bugs automatically.",
      image: ai,
      technologies: ["JavaScript", "Node.js", "React", "Express", "Google AI Studio", "MERN"],
      liveLink: "https://aicodereviewer1.netlify.app", // Add your live link here
      githubLink: "https://github.com/Darshanraval2/AI-Code-Reviewer-.git" // Add your GitHub link here
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills with modern design and animations.",
      technologies: ["React", "CSS3", "JavaScript"],
      image: port,
      liveLink: "https://darshan-portfolio-darshan-6674s-projects.vercel.app/",
      githubLink: "https://github.com/DARSHAN-6674/Portfolio"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1>My Projects</h1>
        <p className="projects-intro">
          Here are some of the projects I've worked on. Each project is a unique challenge that helped me grow as a developer.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> Source Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 