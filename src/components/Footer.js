import React from 'react';
import logoimage from '../images/Logo-Movie-Project-footer.png';
import '../css/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-distributed">
        <div className="footer-left">
          <img src={logoimage} />
          <p className="footer-links">
            <a href="#">Home &nbsp;</a>|
            <a href="#latestNews">&nbsp;Latest News &nbsp;</a>|
            <a href="#aboutUs">&nbsp;About &nbsp;</a>|
            <a href="#">&nbsp;Contact</a>
          </p>

          <p className="footer-company-name">
            &copy; {new Date().getFullYear()} AVN Streamify. All Rights
            Reserved.
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>500 Terry Francois Street</span>
              San Francisco, CA 94158
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1 123-456-7890</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:info@avnstreamify.com">info@avnstreamify.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <h3>
              About<span>AVN Streamify</span>
            </h3>
            We offer training and skill building courses across Technology,
            Design, Management, Science and Humanities.
          </p>

          <div className="footer-icons">
            <a href="https://www.facebook.com" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
