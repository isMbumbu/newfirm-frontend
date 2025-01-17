import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Any Advocates</div>

        {/* Hamburger icon for small screens */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* This is the hamburger icon */}
        </div>

        {/* Menu links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          {/* <li><Link to="/adminDashboard">Admin</Link></li> */}
          {/* <li><Link to="/case/upload">Upload Documents</Link></li>
          <li><Link to="/case/details">Case Details</Link></li>
          <li><Link to="/case/tasks">Task List</Link></li> */}
        </ul>

        {/* Close button */}
        {isMenuOpen && (
          <div className="close-button" onClick={toggleMenu}>
            &times; {/* This is the "X" button */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
