import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

import login from '../images/login.png';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userAuth) => {
        console.log(userAuth);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <main>
      <div className="login-area">
        <div className="Login-main-container">
          <div className="Login-svg">
            <img src={login} className="login"></img>
          </div>
          <div className="Login-form">
            <form>
              <h1>Sign In</h1>
              <h3>Welcome back ! Login to your account </h3>
              <div className="Login-form-group">
                {/* <label htmlFor="Email">Email-id :- </label> */}
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  id="email"
                />
              </div>

              <div className="Login-form-group">
                {/* <label htmlFor="Paasword">Password :- </label> */}
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                />
              </div>
              <div className="Login-form-group">
                <Link to="/forgetPassword">
                  <span className="forgot">Forgot Password?</span>
                </Link>
              </div>
              <div className="Login-form-group">
                <input
                  onClick={signIn}
                  type="submit"
                  value="Submit"
                  name="submit"
                />
              </div>
              <div className="Login-form-group">
                <Link to="/signup">
                  <p>
                    Dont have an account ?<span> Sign Up</span>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
