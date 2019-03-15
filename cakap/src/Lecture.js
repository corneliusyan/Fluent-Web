import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ask from './assets/img/ask.png';
import communication from './assets/img/communication.png';
import health from './assets/img/health.png';
import sport from './assets/img/sport.png';
import hierarchy from './assets/img/hierarchy.png';
 
class Lecture extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
            
            <div className="sidebar-container">
                <img className="lesson-title-img" src={ask} alt="Getting to Know"/>
                <h1>Getting to Know</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <ul className="sidebar-ul">
                    <li className="sidebar-li"><a href="/" className="sidebar-active">All</a></li>
                    <li className="sidebar-li"><a href="/">Ongoing</a></li>
                    <li className="sidebar-li"><a href="/">Completed</a></li>
                </ul>

            </div>

        </div>

        <div className="main-column">
            <div className="main-col-container">
                <div className="row-container">
                    <NavLink to={`/detail/${this.props.match.params.lesson_id}/1`}>
                        <div className="card-small">
                            <div className="card-small-image-container">
                                <img src={communication} className="card-small-image" alt="lecture"/>
                            </div>
                            <div className="card-small-text-container">
                                <h3>Greetings and General Things</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to={`/detail/${this.props.match.params.lesson_id}/2`}>
                        <div className="card-small">
                            <div className="card-small-image-container">
                                <img src={health} className="card-small-image" alt="lecture"/>
                            </div>

                            <div className="card-small-text-container">
                                <h3>Health, Dating, and Marriage</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </NavLink>
                
                </div>

                <div className="row-container">
                    <NavLink to={`/detail/${this.props.match.params.lesson_id}/3`}>
                        <div className="card-small">
                            <div className="card-small-image-container">
                                <img src={sport} className="card-small-image" alt="lecture"/>
                            </div>

                            <div className="card-small-text-container">
                                <h3>Guys, Girls, and Sports</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to={`/detail/${this.props.match.params.lesson_id}/4`}>
                        <div className="card-small">
                            <div className="card-small-image-container">
                                <img src={hierarchy} className="card-small-image" alt="lecture"/>
                            </div>

                            <div className="card-small-text-container">
                                <h3>Family, Children, and Friends</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </NavLink>
                
                </div>

            </div>

        </div>
    </div>
    );
  }
}

export default Lecture;