import React from 'react';
import './Footer.css';  // Add a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 LawConnect. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms & Conditions</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <i className="fab fa-facebook-f"></i>  {/* FontAwesome icon */}
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

