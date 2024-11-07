// src/components/DeliveryBoyLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './DeliveryBoyLogin.css';

const DeliveryBoyLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook to navigate to different pages

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password })
      });

      const data = await response.json();
      if (response.ok) {
        // Save the token to localStorage
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        navigate('/home'); // Redirect to the home or dashboard page
      } else {
        console.error('Error response from server:', data); // Log the error response
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Delivery Boy Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <br></br>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
      
      <button className="forgot-password-link" onClick={() => alert('Forgot password functionality coming soon!')}>
        Forgot Password?
      </button>
    </div>
  );
};

export default DeliveryBoyLogin;
