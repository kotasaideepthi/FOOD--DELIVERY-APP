// src/components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';  // Optional CSS for styling

const Welcome = () => {
  return (
    <div className="welcome-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>

      <div className="welcome-message">
        <h1>Welcome to Food Delivery</h1>
        <p>Order your favorite food with just a few clicks!</p>
      </div>
    </div>
  );
};

export default Welcome;
