import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import App from './App';
import Dashboard from './Dashboard';

function Web() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={App} />
        </div>
      </Router>
    );
  }

export default Web;
