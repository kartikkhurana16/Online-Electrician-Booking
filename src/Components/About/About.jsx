import React from 'react'
import "./About.css";

const About = () => {
  const offerings = [
    {
      icon: '✓',
      title: 'Verified & Experienced Electricians',
      description: 'All our electricians are certified, background-checked, and highly experienced professionals.'
    },
    {
      icon: '📱',
      title: 'Easy Online Booking',
      description: 'Book your electrical service in just a few clicks from anywhere, anytime.'
    },
    {
      icon: '⚡',
      title: 'Same-Day & Emergency Services',
      description: 'Need urgent help? We provide same-day and 24/7 emergency electrical services.'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees. Get clear, upfront pricing before you book.'
    }
  ];

  const howItWorksSteps = [
    {
      step: '1',
      title: 'Choose Your Service',
      description: 'Select the electrical service you need from our comprehensive list.'
    },
    {
      step: '2',
      title: 'Select Date & Location',
      description: 'Pick your preferred date, time, and enter your location details.'
    },
    {
      step: '3',
      title: 'Get Matched',
      description: 'We match you with a verified, experienced electrician in your area.'
    },
    {
      step: '4',
      title: 'Job Completed',
      description: 'Your electrician completes the job with guaranteed satisfaction.'
    }
  ];

  const whyChooseUs = [
    'Trusted network of certified electricians',
    'Instant booking confirmation',
    'Competitive and transparent rates',
    '24/7 customer support',
    'Money-back satisfaction guarantee',
    'Comprehensive insurance coverage'
  ];

  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <h1 className="page-title" >About Our Platform</h1>
          <p className="intro-text">
            Welcome to your trusted electrical service marketplace. We connect 
            homeowners and businesses with qualified, reliable electricians for 
            all their electrical needs. From simple repairs to complex installations, 
            we make finding the right professional simple, safe, and convenient.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="content-box">
            <p>
              We are a dedicated platform designed to bridge the gap between customers 
              and professional electricians. Our mission is simple: to make electrical 
              services accessible, reliable, and stress-free for everyone.
            </p>
            <p>
              Whether you need a quick repair, a complete home rewiring, or emergency 
              electrical support, our platform ensures you get connected with the right 
              professional at the right time. We carefully vet every electrician on our 
              platform to guarantee quality, safety, and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>
                To revolutionize electrical services by providing a seamless, 
                trustworthy platform that connects customers with verified 
                electricians, ensuring safety, quality, and peace of mind.
              </p>
            </div>
            <div className="vision-box">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and preferred electrical service 
                platform, setting industry standards for reliability, 
                transparency, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offerings-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="offerings-grid">
            {offerings.map((offering, index) => (
              <div key={index} className="offering-card">
                <div className="offering-icon">{offering.icon}</div>
                <h4>{offering.title}</h4>
                <p>{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How the Platform Works</h2>
          <div className="steps-container">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {index < howItWorksSteps.length - 1 && (
                  <div className="step-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="why-choose-grid">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="why-choose-item">
                <span className="check-icon">✓</span>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;