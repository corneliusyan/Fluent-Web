import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Lesson from "./Lesson";
import Practice from "./Practice";
import Speak from "./Speak";
import Profile from "./Profile";
import logo from './assets/img/logo2.png';
import Lecture from './Lecture';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="navbar">
            <ul className="navbar-ul">
              <li className="navbar-li"><img src={logo} alt="Cakap" className="logo"/></li>
              <li className="navbar-li"><NavLink className="tab-active" to="/">Lessons</NavLink></li>
              <li className="navbar-li"><NavLink to="/practice">Practice</NavLink></li>
              <li className="navbar-li"><NavLink to="/speak">Speak</NavLink></li>
              <li className="navbar-li"><NavLink to="/profile">Profile</NavLink></li>
            </ul>
          </div>
          <div>
            <Route exact path="/" component={Lesson}/>
            <Route path="/practice" component={Practice}/>
            <Route path="/speak" component={Speak}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/:id" component={Lecture}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
