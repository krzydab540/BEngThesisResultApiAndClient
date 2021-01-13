import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { observer } from "mobx-react";

import Home from "../pages/common/Home";
import Contact from "../pages/common/Contact";
import Login from "../pages/common/Login";
import Logout from "../pages/common/Logout";
import MyResults from "../pages/common/MyResults";
import Result from "../pages/common/Result";
import Unauthorized from "../pages/common/Unauthorized";

export default function Navbar(props) {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <ul></ul>
          <ul className="nav-link-wrapper">
            <Link to={"/home"} className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </ul>
          <ul className="nav-link-wrapper">
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </ul>
          <ul className="nav-link-wrapper">
            <Link to={"/myresults"} className="nav-link">
              My Result
            </Link>
          </ul>
          <ul className="nav-link-wrapper">
            <Link
              to={localStorage.getItem("token") ? "/logout" : "/login"}
              className="nav-link"
            >
              {localStorage.getItem("token") ? "Log out" : "Log in"}
            </Link>
          </ul>
          <ul></ul>
        </nav>
        <hr />
        {/* {console.log(localStorage.getItem("token") ? "/login" : "/logout")} */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/myresults" component={MyResults} />
          <Route path="/unauthorized" component={Unauthorized} />
          <Route path="/logout" component={Logout} />

          <Route exact path="/result" component={Result} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}
