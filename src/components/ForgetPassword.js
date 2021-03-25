import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import forgetImg from '../images/forgetImg.png';
function ForgetPassword() {
  const emailRef = useRef(null);
  const [message, setMessage] = useState(null);
  const [hasError, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(emailRef.current.value)
      .then(() => {
        emailRef.current.value = '';
        setMessage('Password Reset Link Sent To Email.');
        setError(false);
      })
      .catch((e) => {
        if (e.message.includes('no user record'))
          setMessage('Invalid Email-id or User does not Exists');
        else setMessage(e.message);
        setError(true);
      });
  };
  return (
    <main>
      <div className="login-area">
        <div className="Login-main-container">
          <div className="Login-svg">
            <img
              src={forgetImg}
              alt="Forget Password Image"
              className="login"
            />
          </div>
          <div className="Login-form">
            <form>
              <h1>Forgot Password ?</h1>
              <div className="Login-form-group">
                {/* <label htmlFor="Email">Email-id :- </label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  id="email"
                  required
                  ref={emailRef}
                />
              </div>
              {/* <div className="Login-form-group">
                <input
                  type="checkbox"
                  id="policy"
                  name="policy"
                  value="privacypolicy"
                  required
                />
                <label htmlFor="policy"> I agree to the Privacy Policy</label>
              </div> */}
              {message != null && (
                <div className="Login-form-group">
                  <p
                    className={hasError ? 'reset-pass-red' : 'reset-pass-green'}
                  >
                    {message}
                  </p>
                </div>
              )}
              <div className="Login-form-group">
                <input
                  onClick={handleSubmit}
                  type="submit"
                  value="Submit"
                  name="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgetPassword;
