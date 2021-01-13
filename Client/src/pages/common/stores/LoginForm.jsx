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
      alert("E-mail field is empty")
      return;
    }
    if (!this.state.password) {
      alert("Password field is empty")
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
      
      if(result.token===undefined){
        alert("Invalid Credentials.")
      }      

      localStorage.setItem("token", result.token);
      localStorage.setItem("userId", result.userId);

      if (result != null && result.token!=undefined) {
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
