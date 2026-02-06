import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Image */}
        
          <img src="/src/assets/elect.jpg"
            alt="Booking illustration" 
            className="main-image"
          />
          {/* Or use a placeholder background color */}
          {/* <div className="image-placeholder"></div> */}
       

        {/* Right Side - Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Book Your Experience <span className="highlight">Effortlessly</span>
          </h1>
          
          <p className="hero-description">
            Discover seamless booking at your fingertips. Whether you're 
            reserving a table, scheduling an appointment, or booking a service, 
            we make it simple, fast, and hassle-free.
          </p>

          <div className="booking-features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Instant Confirmation</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📅</span>
              <span>Flexible Scheduling</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure & Reliable</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="/booking" className="btn btn-primary">
              Start Booking
            </a>
            <a href="/signin" className="btn btn-secondary">
              Sign In
            </a>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Home;
