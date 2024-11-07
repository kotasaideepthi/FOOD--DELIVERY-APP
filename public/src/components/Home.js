import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
       
        <nav className="top-nav">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2 id="hero-title">Delicious Food Delivered Fast!</h2>
          <p>Order from a wide variety of restaurants and cuisines.</p>
          <button id="get-started-btn">Get Started</button>
        </section>

        <section className="scrolling-images">
          <h2>Popular Restaurants</h2>
          <div className="image-container">
            <img src="https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2021/06/A4395-50-Top-Restuarants-with-beautiful-Interior-Design.jpg" alt="Restaurant 1" />
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/0b/59/41/banquette-velours-et.jpg" alt="Restaurant 2" />
            <img src="https://b.zmtcdn.com/data/pictures/9/21335019/cf220f34ea89371bab3c0f967403ba16.jpeg" alt="Restaurant 3" />
            <img src="https://resizer.otstatic.com/v2/photos/wide-large/3/60820032.jpg" alt="Restaurant 4" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypjbIy4r9BRBvSfjV25bkj9Z8qEL0nVHgZV7B5AbBVPW9W2lmS0ht3gy34nm4LN7mm2k&usqp=CAU" alt="Restaurant 5" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
