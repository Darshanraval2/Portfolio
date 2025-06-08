import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import About from '../About/About'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-ctn'>
      <nav className='navbar'>
        <h2>PORTFOLIO</h2>
        <div className={`menu-items ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
