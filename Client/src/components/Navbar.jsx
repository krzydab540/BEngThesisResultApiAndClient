import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from "@testing-library/react";
import { observer } from 'mobx-react';

import Home from '../pages/common/Home';
import Contact from '../pages/common/Contact';
import Login from '../pages/common/Login';
import MyResults from '../pages/common/MyResults';
import TestResult from '../pages/common/TestResult';

export default function Navbar() {
  return (
    <Router>
    <div>
      <nav className="navbar">
        <ul></ul>
        <ul className="nav-link-wrapper"><Link to={'/home'} className="nav-link"> Home </Link></ul>
        <ul className="nav-link-wrapper"><Link to={'/contact'} className="nav-link">Contact</Link></ul>
        <ul className="nav-link-wrapper"><Link to={'/myresults'} className="nav-link">My Result</Link></ul>
        <ul className="nav-link-wrapper"><Link to={'/login'} className="nav-link">Login</Link></ul>    
        <ul></ul>
      </nav>
      <hr />
      
      <Switch>
          <Route path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/myresults' component={MyResults} />
          <Route path='/testresult' component={TestResult} />
      </Switch>
    </div>
  </Router>
  );
}
