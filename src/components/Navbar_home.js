import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../images/Logo-Movie-Project.jpg';
import '../css/Navbar_home.css';
import searchIcon from '../images/icons8-search.png';
import { auth } from '../firebase';

function Navbar_home() {
  // function handleSearchChange(e) {
  //   setSearch(e.target.value);
  // }
  // console.log(auth.currentUser);
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
            <div className="searchBox">
              <Link to="/Search">
                <img src={searchIcon} alt="Search Icon" />
              </Link>
            </div>
            <div className="dropdown">
              <Link to="/Profile">
                <i className="fa fa-fw fa-user"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar_home;
