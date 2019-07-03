import React, { Component } from 'react';
import logo from './assets/img/fluent-logo.png';
import homeImg from './assets/img/home.png';
class Dashboard extends Component {  
  render() {
    return (
      <section className="sectionStyle home center">
        <div className="menu sectionStyle">
          <div>
            <img className="logoStyle" src={logo} />
          </div>
          <div className="signin-button">
            <p>Sign In</p>
          </div>
        </div>
        <div className="center content">
          <div className="center">
            <div className="title">
              <div className="stripe">
              </div>
              <div className="content-stripe">
                <h1>Inspiring English Future Speaker</h1>
                <div className="join-button">
                  <p>Join Us</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={homeImg} />
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;