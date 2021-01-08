import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "./UserStore";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      buttonDisabled: false,
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 20) {
      return;
    }
    this.setState({
      [property]: val,
    });
  }

  resetForm() {
    this.setState = {
      email: "",
      password: "",
      buttonDisabled: false,
    };
  }

  async doLogin() {
    if (!this.state.email) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true,
    });

    try {
      // access API
      let res = await fetch("https://localhost:44301/api/Login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });

      let result = await res.json(); // here is the token
      console.log(result.token);
      console.log(result.userId);

      localStorage.setItem("token", result.token);
      localStorage.setItem("userId", result.userId);

      // if (result && result.success) {
      //   UserStore.isLoggedIn = true;
      //   UserStore.email = result.email;
      // } else if (result && result.success === false) {
      //   this.resetForm();
      //   alert(result.msg); //TODO: Add message
      // }

      if (result != null) {
        UserStore.isLoggedIn = true;
      }
    } catch (e) {
      console.log(e);
      this.resetForm();
    }
  }

  render() {
    return (
      <div className="padding-center">
        <h1 className="padded-header"> Sign in in order to proceed:</h1>
        <InputField
          type="text"
          placeholder="E-mail"
          value={this.state.email ? this.state.email : ""}
          onChange={(val) => this.setInputValue("email", val)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={this.state.password ? this.state.password : ""}
          onChange={(val) => this.setInputValue("password", val)}
        />
        <SubmitButton
          text="login"
          disabled={this.state.buttonDisabled}
          onClick={() => this.doLogin()}
        />
      </div>
    );
  }
}

export default LoginForm;
