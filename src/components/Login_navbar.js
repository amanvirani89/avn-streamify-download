import React from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../images/Logo-Movie-Project.png';
import '../css/Login_Navbar.css';

function Login_Navbar() {
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
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Login_Navbar;
