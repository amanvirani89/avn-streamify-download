import React from 'react';
import aboutImage from '../images/about-image.jpg';
import createAccount from '../images/create-account.jpg';
import addPlan from '../images/plans-subscribe.jpg';
import enjoyMovie from '../images/enjoy-movie.png';
import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';
import '../css/MainSection.css';

function MainSection() {
  return (
    <div className="main-container" id="aboutUs">
      <h3>About Us</h3>
      <div className="about-row">
        <div className="about-column">
          <img src={aboutImage} />
        </div>
        <div className="about-column">
          <h4> Watch movies, shows, and more on AVN-Streamify</h4>
          <p>
            {' '}
            Watch exclusive Amazon Originals, popular movies, TV shows, sports,
            and live events — it’s all included with a membership. Members can
            watch even more by subscribing to premium and specialty channels. No
            cable required.
          </p>
        </div>
      </div>

      <div className="works-container">
        <h3>How it Works</h3>
        <div className="step1">
          <span className="main-line"></span>
          <span className="main-line-step-btn">step 1</span>
          <div className="flex-step1">
            <img src={createAccount} />
          </div>
          <div className="flex-step1-right">
            <h3>Just Enter the few details</h3>
            <p>
              Enter your required information here and get one step ahead !!It
              is a fast and easy process
            </p>
          </div>
        </div>

        <div className="step1">
          <span className="main-line-step2-btn">step 2</span>
          <div className="flex-step1-left">
            <h3>Choose your subscription plan wisely !!</h3>
            <p>
              We give you oppurtunity to choose according to your need by
              providing different subscription plans with flexible rates
            </p>
          </div>
          <div className="flex-step1">
            <img className="plan" src={addPlan} />
          </div>
        </div>

        <div className="step1">
          <span className="main-line-step3-btn">step 3</span>
          <div className="flex-step1">
            <img className="enjoy" src={enjoyMovie} />
          </div>
          <div className="flex-step3-right">
            <h3>And finally you are here !!</h3>
            <p>
              {' '}
              Choose your payment method and enjoy watchig your favourite shows
              without getting interrupted{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="blogs" id="latestNews">
        <h3>Latest News</h3>
        <div className="blog">
          <div className="blog-card">
            <input type="radio" name="select" id="tap-1" defaultChecked />
            <input type="radio" name="select" id="tap-2" />
            <input type="radio" name="select" id="tap-3" />
            <input type="checkbox" id="imgTap" />
            <div className="sliders">
              <label htmlFor="tap-1" className="tap tap-1"></label>
              <label htmlFor="tap-2" className="tap tap-2"></label>
              <label htmlFor="tap-3" className="tap tap-3"></label>
            </div>
            <div className="inner-part">
              <label htmlFor="imgTap" className="img">
                <img className="img-1" src={profile1} />
              </label>
              <div className="content content-1">
                <span>09 April 2021</span>
                <div className="title">5 Things About ‘Thunder Force’ </div>
                <div className="text">
                  Melissa McCarthy and Octavia Spencer star in the new Netflix
                  film Thunder Force as two childhood best friends who reunite
                  as an unlikely crime-fighting superhero duo
                </div>
                <button>Read more</button>
              </div>
            </div>
            <div className="inner-part">
              <label htmlFor="imgTap" className="img">
                <img className="img-2" src={profile2} />
              </label>
              <div className="content content-2">
                <span>26 January 2021</span>
                <div className="title">Money Heist season 5 </div>
                <div className="text">
                  However, viewers of the hit show have also been dealt a
                  devastating update about the future as showrunners revealed on
                  July 31 that season 5 would be the last outing.
                </div>
                <button>Read more</button>
              </div>
            </div>
            <div className="inner-part">
              <label htmlFor="imgTap" className="img">
                <img className="img-3" src={profile3} />
              </label>
              <div className="content content-3">
                <span>March 11, 2021</span>
                <div className="title">Roohi Movie</div>
                <div className="text">
                  Roohi is a 2021 Indian Hindi-language comedy horror film
                  directed by Hardik Mehta and produced by Dinesh Vijan under
                  the banner Maddock Films
                </div>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
