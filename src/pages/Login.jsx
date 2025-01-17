import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router

const Login = () => {
  const [name, setName] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // For handling error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/UserDashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.error || `Error: ${response.statusText}`);
      }
    } catch (error) {
      setError('Network error. Please try again later.');
    }
  };
  

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <label>
            Name:
            <input
              type="text"
              value={name} // Binding to name
              onChange={(e) => setName(e.target.value)} // Update name state
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
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account?{' '}
          <button
            className="auth-button secondary"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </p>
        <p className="admin-link">
          Are you an admin?{' '}
          <button
            className="auth-button secondary"
            onClick={() => navigate('/admin')}
          >
            Login as Admin
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
