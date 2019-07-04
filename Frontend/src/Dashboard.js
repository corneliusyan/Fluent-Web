import React, { Component } from 'react';
import logo from './assets/img/fluent-logo.png';
import homeImg from './assets/img/home.png';
import lesson from './assets/img/lesson-mockup.png';
import practice from './assets/img/practice-mockup.png';
import speak from './assets/img/speak-mockup.png';
class Dashboard extends Component {  
  render() {
    return (
      <div className="dashboard">
        <section className="sectionStyle home center">
          <div className="menu sectionStyle">
            <div>
              <img className="logoStyle" src={logo} />
            </div>
            <a href="/app">
              <div className="signin-button">
                <p>Sign In</p>
              </div>
            </a>
          </div>
          <div className="center content">
            <div className="center">
              <div className="title">
                <div className="stripe">
                </div>
                <div className="content-stripe">
                  <h1>Inspiring English Future Speaker</h1>
                  <a href="/app">
                    <div className="join-button">
                      <p>Join Us</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img src={homeImg} />
            </div>
          </div>
        </section>
        <section className="sectionStyle feature center">
          <div>
            <h1>Feature Overview</h1>
          </div>
          <div className="feature-content">
            <div>
              <img src={lesson} />
              <div className="feature-box center">
                <h2>Lesson</h2>
                <p>
                  Finish comprehensive lessons everyday. Earn badges, point, and level up!
                </p>
                <a href="/app#/lesson">
                  <p>
                    Learn More 
                    <i class="fa fa-angle-double-right"></i>
                  </p>
                </a>
              </div>
            </div>
            <div className="right">
              <div className="feature-box center">
                <h2>Practice</h2>
                <p>
                  Prepare for your speech, interview, or anything! Type in the box, and start
                  recording yourself. Fluent will help you review and improve it with our 
                  cutting edge AI.
                </p>
                <a href="/app#/practice">
                  <p>
                    Learn More 
                    <i class="fa fa-angle-double-right"></i>
                  </p>
                </a>
              </div>
              <img src={practice} />
            </div>
            <div>
              <img src={speak} />
              <div className="feature-box center">
                <h2>Speak</h2>
                <p>
                  Choose the topic, and practice your speaking with stranger, and score each
                  other. It's fun!
                </p>
                <a href="/app#/speak">
                  <p>
                    Learn More 
                    <i class="fa fa-angle-double-right"></i>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;