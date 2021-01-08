import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from "@testing-library/react";
import UserStore from "./stores/UserStore";
import LoginForm from "./stores/LoginForm";
import SubmitButton from "./stores/SubmitButton";
import { observer } from 'mobx-react';

class Login extends Component {
  async componentDidMount() {
    try {
      let res = await fetch(
        "/isLoggedIn", // requires API endpoint
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.userName = result.userName;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch(
        "/logout", // requires API endpoint 
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.userName = "";
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {            
    
    // TODO: Change to React Router to change views
    // TODO: Add validation to check if user is logged in => bearer token
    if (UserStore.loading) {
      return (
        <div className="app">
          <div className="container">Loading, please wait</div>
        </div>
      );
    }

    else {
      if (UserStore.isLoggedIn) {
        return (
          <div className="app">
            <div className="container">
              Welcome {UserStore.userName}
              <SubmitButton
                text={"Log out"}
                disabled={false}
                onClick={() => this.doLogout}
              ></SubmitButton>
            </div>
          </div>
        )
      }
    }

    return (
      <div className="app">
        <div className="container">
          <LoginForm />
        </div>
      </div>
    );

  }
}

export default observer(Login);
