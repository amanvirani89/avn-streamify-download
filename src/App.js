import React, { useEffect } from 'react';
import './App.css';
import './css/MediaQuery.css';
import './css/Navbar_home.css';

import Navbar_landing from './components/Navbar_landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
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
import Navbar_home from './components/Navbar_home';

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
              <Redirect to="/" />
            </Switch>
          </>
        ) : (
          <>
            <Navbar_home />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/HomePage" exact component={HomePage} />
              <Route path="/MoviePage" exact component={MoviePage} />
              <Route path="/TvPage" exact component={TvPage} />
              <Redirect to="/" />
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
