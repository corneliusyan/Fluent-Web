import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import feedback from './assets/img/feedback.png';

class Feedback extends Component {
  render() {
    return (
      <div className="main-container" style={{display: 'flex', justifyContent: 'center'}}>
        <NavLink to="/speak">
          <div style={{textAlign: 'center'}}>
            <img src={feedback} style={{height: 800}} />
          </div>
        </NavLink>
      </div>
    );
  }
}
 
export default Feedback;