import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import rocket from './assets/img/rocket.png';
import ask from './assets/img/ask.png';
import newsletter from './assets/img/newsletter.png';
 
class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      satu: 1,
      dua: 2,
      tiga: 3,
    };
  }

  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
            <div className="sidebar-container">
                <h1>Lessons</h1>
                <ul className="sidebar-ul">
                    <li className="sidebar-li"><a href="/" className="sidebar-active">All</a></li>
                    <li className="sidebar-li"><a href="/">Ongoing</a></li>
                    <li className="sidebar-li"><a href="/">Completed</a></li>
                </ul>
            </div>
        </div>

        <div className="main-column">
            <div className="main-col-container">
                <div className="card focused">
                    <div className="card-text-container">
                        <h1>Introduction</h1>
                        <p>Welcome to the Introduction lesson! Here, you will get the basic lectures from Cakap. I'm sure you can do it easily!</p>
                        <div className="lesson-info">
                            <p className="lectures"><b>4 Lectures</b></p>
                            <p className="dot-info"><b>•</b></p>
                            <p className="curr-participants"><b>5.8k people currently working on this</b></p>
                        </div>
                    </div>

                    <div className="card-img-container">
                        <img src={rocket} alt="Lesson 1"/>
                        <NavLink to={`/lessons/${this.state.satu}`}>
                          <button className="start-button">Start</button>
                        </NavLink>
                    </div>
                </div>

                <div className="card">
                    <div className="card-text-container">
                        <h1>Amazing Quote</h1>
                        <p>“Tell me and I forget. Teach me and I remember. Involve me and I learn.” - Benjamin Franklin. Wow, such a beautiful quote. Let’s read some more amazing quotes!</p>
                        <div className="lesson-info">
                            <p className="lectures"><b>4 Lectures</b></p>
                            <p className="dot-info"><b>•</b></p>
                            <p className="curr-participants"><b>5.8k people currently working on this</b></p>
                        </div>
                    </div>

                    <div className="card-img-container">
                        <img src={ask} alt="Lesson 2"/>
                        <NavLink to={`/lessons/${this.state.dua}`}>
                          <button className="start-button">Start</button>
                        </NavLink>
                    </div>
                </div>

                <div className="card">
                    <div className="card-text-container">
                        <h1>Great Holiday</h1>
                        <p>Hi! Long time no see. How is your holiday? Is it great? Don't worry, Cakap will give you great holiday experince.</p>
                        <div className="lesson-info">
                            <p className="lectures"><b>4 Lectures</b></p>
                            <p className="dot-info"><b>•</b></p>
                            <p className="curr-participants"><b>5.8k people currently working on this</b></p>
                        </div>
                    </div>

                    <div className="card-img-container">
                        <img src={newsletter} alt="Lesson 3"/>
                        <NavLink to={`/lessons/${this.state.tiga}`}>
                          <button className="start-button">Start</button>
                        </NavLink>
                    </div>
                </div>

            </div>

        </div>
      </div>
    );
  }
}
 
export default Lesson;