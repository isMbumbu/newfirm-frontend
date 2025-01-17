import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We love to hear from you! Whether you have a question, feedback, or a partnership opportunity, feel free to reach out to us through any of the methods below.
      </p>
      <div className="contact-info">
        <div className="contact-method">
          <h3>Email</h3>
          <p>
            <a href="mailto:ambukaa93@gmail.com">ambukaa93@gmail.com</a>
          </p>
        </div>
        <div className="contact-method">
          <h3>Phone</h3>
          <p>
            <a href="tel:+254115781276">011 578 1276</a>
          </p>
        </div>
        <div className="contact-method">
          <h3>Address</h3>
          <p>
            Unity Plaza, Moi Avenue, Nairobi <br />
            P.O BOX 12345-00100, Nairobi
          </p>
        </div>
      </div>
      <div className="contact-links">
        <h3>Follow Us</h3>
        <p>Stay connected with us through our social media platforms:</p>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Follow us on Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Follow us on Twitter
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              Connect with us on LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
