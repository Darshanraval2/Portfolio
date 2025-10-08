import React from 'react'
import "./Home.css"
import darshan from "../../assets/darshan2.jpg"
import ecom from "../../assets/e-commrece.png"
import { Link } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import port from "../../assets/portfolio.png"





const Home = () => {
  return (
   
    <div className='home-container'>
       
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text" >
            <h1>Hi, I'm Darshan</h1>
            <h2>MERN Stack Developer</h2>
            <p className="hero-description">
              "Passionate about building interactive web apps.
              Transforming ideas into responsive web experiences with React, Node.js & MongoDB"
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="cta-button primary">Get in Touch</Link>
              <Link to="/projects" className="cta-button secondary">View Projects</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={darshan} alt="Darshan Raval" />
            </div>
          </div>
        </div>
      </section>
     

      {/* Quick Skills Preview */}
      <section id="skills" className="skills-preview">
        <h2>What I Do</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fas fa-code"></i>
            <h3>Frontend Development</h3>
            <p>Creating responsive and interactive user interfaces with React.js</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-server"></i>
            <h3>Backend Development</h3>
            <p>Building robust server-side applications with Node.js and Express</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-database"></i>
            <h3>Database Management</h3>
            <p>Designing and implementing MongoDB databases for optimal performance</p>
          </div>
        </div>
      </section>


      <section id="about" className='about'>
        <About /> 
      </section>

      {/* Featured Projects Preview */}
      <section id="projects" className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={ecom} alt="Project 1" />
            </div>
            <div className="project-info">
              <a href="https://e-commerce-mu-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">
                <h3>E-Commerce Platform</h3>
              </a>
              <p>A full-stack e-commerce solution with React and Node.js</p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className="project-card">
           
            <div className="project-image">
              <img src={port} alt="Portfolio" />
            </div>
            <div className="project-info">
               <a href="https://darshan-portfolio-darshan-6674s-projects.vercel.app/">
              <h3>Porfolio</h3></a>
              <p>Responsive Web site appliction</p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS & HTML</span>
                <span>Javascript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="cta-section">
        <h2>Let's Work Together</h2>
        <p>I'm always open to discussing new projects and opportunities</p>
        <Link to="/contact" className="cta-button primary">Get in Touch</Link>
      </section>


    </div>
  )
}

export default Home
