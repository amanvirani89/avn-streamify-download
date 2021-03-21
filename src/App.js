import React, { useEffect } from 'react';
import './App.css';
import './css/Navbar_landing.css';
import './css/HeroSection.css';
import './css/MainSection.css';
import './css/Footer.css';
import './css/login.css';
import './css/Login_Navbar.css';
import Navbar_landing from './components/Navbar_landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import ForgetPasswordPage from './components/pages/ForgotPasswordPage';
import HomePage from './components/HomePage';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import MoviePage from './components/MoviePage';
import TvPage from './components/TvPage';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const authentication = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return authentication;
  }, [dispatch]);

  return (
    <>
      <Router>
        {user == null ? (
          <>
            <Navbar_landing />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/avn-streamify" exact component={LandingPage} />
              <Route path="/signup" exact component={SignUpPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route
                path="/forgetPassword"
                exact
                component={ForgetPasswordPage}
              />
            </Switch>
          </>
        ) : (
          <>
            {/* <HomePage /> */}
            {/* <MoviePage /> */}
            <TvPage />
            <Switch>
              <Route path="/HomePage" exact component={HomePage} />
              <Route path="/MoviePage" exact component={MoviePage} />
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
