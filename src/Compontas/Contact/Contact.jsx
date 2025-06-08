import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "880e528f-f1eb-47a3-9f0d-19567fbdeb9c", // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Get In Touch</h1>
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  disabled={status.submitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  disabled={status.submitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  disabled={status.submitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                  disabled={status.submitting}
                ></textarea>
              </div>

              {status.error && (
                <div className="error-message">
                  {status.error}
                </div>
              )}

              {status.submitted && (
                <div className="success-message">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-items">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Location</h3>
                  <p>Gujarat, India</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>darshanraval831@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p>+91 8866159038</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="https://github.com/DARSHAN-6674" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/darshanraval-6674-git/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 