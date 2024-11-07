import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Menu from './components/Menu';  
import About from './components/About';
import Welcome from './components/Welcome';
import ContactUs from './components/Contact';
import Address from './components/Address';  // Import ContactUs component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />                {/* Home page route */}
          <Route path="/register" element={<Register />} />    {/* Register page route */}
          <Route path="/login" element={<Login />} />          {/* Login page route */}
          <Route path="/menu" element={<Menu />} />            {/* Menu page route */}
          <Route path="/about" element={<About />} />          {/* About page route */}
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/address" component={<Address/>} />   {/* Contact page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
