import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import lesson from './assets/img/lesson.png';
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
            <img className="lesson-title-img" src={lesson} alt="Lesson"/>
                <h1>Enrolled Classes</h1>
                <p>“Tell me and I forget. Teach me and I remember. Involve me and I learn.” - Benjamin Franklin. Let's learn to speak English using Celathu!</p>
            </div>
        </div>
 
        <div className="main-column">
            <div className="main-col-container">
                <div className="card focused">
                    <div className="card-text-container">
                        <h1>English - Semester 2</h1>
                        <p>This course focuses on learning sound and letter patterns; developing sight, functional and personal reading vocabulary.</p>
                        <div className="lesson-info">
                            <p className="lectures"><b>4 Lectures</b></p>
                            <p className="dot-info"><b>•</b></p>
                            <p className="curr-participants"><b>SMAN 3 Yogyakarta</b></p>
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
                        <h1>IENG07 Intermediate English/Trades Course</h1>
                        <p>This course focuses on developing communication skills required for entry into Carpentry, Horticulture, Automotive Mechanic, Heavy Duty Mechanic, Plumbing, Gas-Fitting, Sheet Metal, Aircraft Sheet Metal and Welding Trades programs.</p>
                        <div className="lesson-info">
                            <p className="lectures"><b>4 Lectures</b></p>
                            <p className="dot-info"><b>•</b></p>
                            <p className="curr-participants"><b>English First</b></p>
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
                        <h1>FENG03 Fundamental English Course</h1>
                        <p>This course focuses on expanding vocabulary and developing reading fluency; building context and phonic skills; giving oral opinions and writing sentence answers about reading;</p>
                        <div className="lesson-info">
                            <p className="lectures"><b>4 Lectures</b></p>
                            <p className="dot-info"><b>•</b></p>
                            <p className="curr-participants"><b>The British Institute</b></p>
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