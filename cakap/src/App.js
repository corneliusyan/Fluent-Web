import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import logo from './assets/img/logo2.png';

import Lesson from "./Lesson";
import Practice from "./Practice";
import Speak from "./Speak";
import Profile from "./Profile";
import Lecture from './Lecture';
import Analyze from './Analyze';
import Call from './Call';
import LectureDetails1 from './LectureDetails/LectureDetails.1';
import LectureDetails2 from './LectureDetails/LectureDetails.2';
import LectureDetails3 from './LectureDetails/LectureDetails.3';
import LectureDetails4 from './LectureDetails/LectureDetails.4';
import LectureDetails5 from './LectureDetails/LectureDetails.5';
import LectureDetails6 from './LectureDetails/LectureDetails.6';
import LectureDetails7 from './LectureDetails/LectureDetails.7';
import LectureDetails8 from './LectureDetails/LectureDetails.8';
import LectureDetails9 from './LectureDetails/LectureDetails.9';
import LectureDetails10 from './LectureDetails/LectureDetails.10';
import LectureDetails11 from './LectureDetails/LectureDetails.11';
import LectureDetails12 from './LectureDetails/LectureDetails.12';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="navbar">
            <ul className="navbar-ul">
              <li className="navbar-li"><img src={logo} alt="Cakap" className="logo"/></li>
              <NavLink to="/"></NavLink>
              <li className="navbar-li"><NavLink to="/lesson">Lessons</NavLink></li>
              <li className="navbar-li"><NavLink to="/practice">Practice</NavLink></li>
              <li className="navbar-li"><NavLink to="/speak">Speak</NavLink></li>
              <li className="navbar-li"><NavLink to="/profile">Profile</NavLink></li>
            </ul>
          </div>
          <div>
            <Route exact path="/" component={Lesson}/>
            <Route path="/lesson" component={Lesson}/>

            <Route path="/lessons/:lesson_id" component={Lecture}/>
            
            <Route path="/detail/1/1" component={LectureDetails1}/>
            <Route path="/detail/1/2" component={LectureDetails2}/>
            <Route path="/detail/1/3" component={LectureDetails3}/>
            <Route path="/detail/1/4" component={LectureDetails4}/>
            <Route path="/detail/2/1" component={LectureDetails5}/>
            <Route path="/detail/2/2" component={LectureDetails6}/>
            <Route path="/detail/2/3" component={LectureDetails7}/>
            <Route path="/detail/2/4" component={LectureDetails8}/>
            <Route path="/detail/3/1" component={LectureDetails9}/>
            <Route path="/detail/3/2" component={LectureDetails10}/>
            <Route path="/detail/3/3" component={LectureDetails11}/>
            <Route path="/detail/3/4" component={LectureDetails12}/> 

            <Route path="/analyze" component={Analyze}/>
            <Route path="/practice" component={Practice}/>
            <Route path="/speak" component={Speak}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/call" component={Call}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
