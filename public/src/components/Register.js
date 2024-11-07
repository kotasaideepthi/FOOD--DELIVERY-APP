import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import './Register.css';

const Register = () => {
  const navigate = useNavigate();  // Hook to navigate to different pages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const { name, email, phone, password } = formData;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to register the user
      const response = await fetch('http://localhost:5000/api/auth/register', {  // Make sure this URL matches your backend endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, password })
      });

      const data = await response.json();  // Parse the JSON response

      console.log('Response from server:', data);  // Log the response for debugging

      if (response.ok) {  // Check if the response status is in the 200-299 range
        alert('User registered successfully');
        navigate('/login');  // Redirect to the login page after successful registration
      } else {
        alert(data.message || 'Registration failed');  // Show an error message
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred while registering. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h1>Fill up your plate by <span>REGISTERING</span></h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
