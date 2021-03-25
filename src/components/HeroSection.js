import React from 'react';
import { Link } from 'react-router-dom';
import wallpaper from '../images/3d-banner-collage.jpg';
import '../css/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={wallpaper} alt="banner image" height="660px" width="100%" />

      <div className="banner-heading">
        <h2>Welcome To AVN Streamify</h2>
      </div>

      <div className="btn-container">
        <Link to="/signup">
          <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
