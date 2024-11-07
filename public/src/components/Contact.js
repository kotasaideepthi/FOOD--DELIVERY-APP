import React, { useState } from 'react';
import './ContactUs.css'; // Assuming the CSS is saved in a file called ContactUs.css

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (send to server, etc.)
    console.log(formData);
    // Reset form data after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Contact FoodieXpress</h1>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get In Touch With Us</h2>

        {/* Contact Information */}
        <div className="contact-info">
          <div>
            <h3>Our Office</h3>
            <p>123 Foodie Lane, Suite 100<br />Cityville, State 12345</p>
          </div>
          <div>
            <h3>Call Us</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@foodiexpress.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 FoodieXpress. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
