import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router
import axios from 'axios'; // Optional, use axios for API calls, or you can use fetch
import './register.css'; 

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // For handling error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // For fetch
const response = await fetch('http://localhost:5000/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, password }),
});

      // On successful registration, navigate to the login page
      navigate('/login');
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200
        setError(error.response.data.error || 'Registration failed');
      } else {
        // No response from server
        setError('Network error. Please try again later.');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p className="login-link">
          Already registered?{' '}
          <button
            className="auth-button secondary"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
