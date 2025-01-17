import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Any Advocates</h1>
        <p>
          Empowering lawyers and clients with seamless communication and efficient case management.
        </p>
        <button
          className="cta-button"
          onClick={() => navigate('/register')}
        >
          Get Started
        </button>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Visit us at: <strong>Somewhere Street, Nairobi, Kenya.</strong>
        </p>
        <p>
          Call us: <strong>0115781276</strong>
        </p>
        <p>
          Email: <strong>andrew@lawconnect.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;

