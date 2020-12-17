import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from "@testing-library/react";
import "./bootstrap.css";
import "./styles/styles.scss";

import { observer } from 'mobx-react';

import Navbar from './components/Navbar';

import Home from './pages/common/Home';
import About from './pages/common/About';
import Contact from './pages/common/Contact';
import Login from './pages/common/Login';
// import Result from './pages/common/Result';


class App extends Component {
  render() {            

    return (
      <Navbar/>
      );

  }
}

export default observer(App);
