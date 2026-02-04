import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <h1>Welcome to Medical Tourism</h1>
        <p>Your journey to health and wellness starts here.</p>
        <button>Get Started</button>
      </section>

      {/* Treatments Section */}
      <section id="treatments">
        <h2>Our Treatments</h2>
        <ul>
          <li>Cardiology</li>
          <li>Orthopedics</li>
          <li>Cosmetic Surgery</li>
          <li>Fertility Treatments</li>
        </ul>
      </section>

      {/* Doctors Section */}
      <section id="doctors">
        <h2>Meet Our Doctors</h2>
        <p>Our experienced doctors are here to guide you through your treatment journey.</p>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>We offer personalized care, competitive pricing, and a seamless travel experience.</p>
      </section>

      {/* Travel Assistance Section */}
      <section id="travel-assistance">
        <h2>Travel Assistance</h2>
        <p>We help you with visa, accommodation, and transportation arrangements.</p>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h2>What Our Patients Say</h2>
        <blockquote>
          <p>"Amazing experience! Highly recommend!" - John D.</p>
        </blockquote>
      </section>

      {/* Call to Action Section */}
      <section id="cta">
        <h2>Ready to Start Your Journey?</h2>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default LandingPage;