import React from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../images/Logo-Movie-Project.png';
import '../css/Navbar_home.css';
import { auth } from '../firebase';

function Navbar_home() {
  console.log(auth.currentUser);
  return (
    <header>
      <div className="banner-container">
        <nav>
          <div className="navigation-home">
            <div className="Logo-home">
              <Link to="/">
                <img src={logoimage} />
              </Link>
            </div>
            <div className="movies">
              <Link to="/MoviePage">Movies</Link>
            </div>
            <div className="movies">
              <Link to="/TvPage">TV Shows</Link>
            </div>
            <div className="movies">
              <Link to="/HomePage">Popular</Link>
            </div>
            {/* <div className="Search">
              <Link to="/">
              <i class="fa fa-search"></i>
              </Link>
            </div> */}
            <div className="dropdown">
              <Link to="/">
                <i class="fa fa-fw fa-user"></i>
              </Link>
              <div className="dropdown-content">
                <p>{auth.currentUser.displayName}</p>
                <div className="btn-log-out">
                  <button onClick={() => auth.signOut()}>LogOut</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar_home;
