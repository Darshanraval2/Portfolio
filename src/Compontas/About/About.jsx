import React from 'react'
import './About.css'

const About = () => {  return (    <div className="about-container">
      <div className="about-section">
        <h1><i className="fas fa-user"></i> About Me</h1>
        <div className="about-content">
          <p className="about-text">
           "I am a front-end and MERN Stack Developer who is passionate about React.js and Redux. I love developing scalable, high-performance, and interactive web applications. Having experience in full-stack development using Node.js, JavaScript, MongoDB, and Express.js, I excel in solving intricate problems and developing effective solutions."
          </p>
          
          <div className="skills-section">
            <h2><i className="fas fa-code"></i> Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3><i className="fas fa-laptop-code"></i> Frontend</h3>
                <ul>
                  <li><i className="fab fa-react"></i> React.js</li>
                  <li><i className="fab fa-html5"></i> HTML5 & CSS3</li>
                  <li><i className="fab fa-js"></i> JavaScript (ES6+)</li>
                  <li><i className="fas fa-mobile-alt"></i> Responsive Design</li>
                  <li><i className="fas fa-mobile-alt"></i>Figma</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-server"></i> Backend</h3>
                <ul>
                  <li><i className="fab fa-node-js"></i> Node.js</li>
                  <li><i className="fas fa-code-branch"></i> Express.js</li>
                  <li><i className="fas fa-database"></i> MongoDB</li>
                  <li><i className="fas fa-plug"></i> RESTful APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3><i className="fas fa-tools"></i> Tools & Others</h3>
                <ul>
                  <li><i className="fab fa-git-alt"></i> Git & GitHub</li>
                  <li><i className="fas fa-code"></i> VS Code</li>
                  <li><i className="fas fa-paper-plane"></i> Postman</li>
                  <li><i className="fab fa-npm"></i> npm</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h2><i className="fas fa-briefcase"></i> Experience</h2>
            <div className="experience-item">
              <h3><i className="fas fa-laptop-code"></i> MERN Stack Developer</h3>
              <p className="duration"><i className="far fa-calendar-alt"></i> 2024 - Intern</p>
              <ul>
                <li><i className="fas fa-check-circle"></i> Developed full-stack web applications using React, Node.js, and MongoDB</li>
                <li><i className="fas fa-check-circle"></i> Implemented responsive designs and optimized user experience</li>
                <li><i className="fas fa-check-circle"></i> Collaborated with teams to deliver high-quality solutions</li>
              </ul>
            </div>
          </div>

          <div className="education-section">
            <h2><i className="fas fa-graduation-cap"></i> Education</h2>
            <div className="education-item">
              <h3><i className="fas fa-university"></i> Bachelor's Degree in Computer Engineering</h3>
              <p className="duration"><i className="far fa-calendar-alt"></i> 2023 - Presant</p>

              <h3><i className="fas fa-university"></i> Diploma Computer Engineering</h3>
              <p className="duration"><i className="far fa-calendar-alt"></i> 2019 - 2023</p>

              <p><i className="fas fa-book"></i> Focused on software development and web technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
