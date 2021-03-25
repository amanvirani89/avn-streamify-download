import React from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../images/Logo-Movie-Project.png';
import '../css/Navbar_landing.css';

function Navbar_landing() {
  return (
    <header>
      <div className="banner-container">
        <nav>
          <div className="navigation">
            <div className="Logo">
              <Link to="/">
                <img src={logoimage} />
              </Link>
            </div>
            <div className="btn-sign-in">
              <Link to="/login">
                <span>SignIn</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar_landing;
