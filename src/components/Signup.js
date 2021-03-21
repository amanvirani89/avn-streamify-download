import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import signup from '../images/signup.png';

function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cpasswordRef = useRef(null);
  const nameRef = useRef(null);
  const [Error, setError] = useState('');
  const register = (e) => {
    e.preventDefault();
    if (passwordRef.current.value == cpasswordRef.current.value) {
      setError('');
      auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((userAuth) => {
          auth.currentUser
            .updateProfile({
              displayName: nameRef.current.value,
            })
            .then((user) => {
              console.log(user);
              alert('User registered');
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      setError('Password Does Not Match');
    }
  };
  return (
    <main>
      <div className="login-area">
        <div className="Login-main-container">
          <div className="Login-svg">
            <img src={signup} className="login"></img>
          </div>
          <div className="Login-form">
            <form>
              <h1>Sign Up</h1>
              <div className="Login-form-group">
                <input
                  type="first Name"
                  name="fname"
                  placeholder="Enter your First Name"
                  id="fname"
                  ref={nameRef}
                />
              </div>
              {/* <div className="Login-form-group">
                <input
                  type="Last Name"
                  name="lname"
                  placeholder="Enter your Last Name"
                  id="lname"
                />
              </div> */}
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
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                />
              </div>{' '}
              <div className="Login-form-group">
                <input
                  ref={cpasswordRef}
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Your Password"
                  id="cpassword"
                />
              </div>
              <h3 style={{ color: 'red' }}>{Error}</h3>
              <div div className="Login-form-group">
                <input
                  onClick={register}
                  type="submit"
                  value="Sign Up"
                  name="Continue"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
