import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // Add error state for handling errors
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend for admin login
      const response = await fetch('http://localhost:5000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password to the backend
      });

      const data = await response.json();

      if (response.ok) {
        // On successful login, store token and navigate
        localStorage.setItem('token', data.token);
        navigate('/adminDashboard');  // Redirect to admin dashboard
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <label>
            Admin Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Admin Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="register-link">
          Not an admin?{' '}
          <button
            className="auth-button secondary"
            onClick={() => navigate('/login')}
          >
            Go to User Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
