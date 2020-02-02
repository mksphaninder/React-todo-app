import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "krishna",
      password: "",
      loginSuccess: false,
      loginFail: false
    };

    // Binding
    this.handleChange = this.handleChange.bind(this);
    this.loginButton = this.loginButton.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  loginButton() {
    if (
      this.state.username === "krishna" &&
      this.state.password === "password"
    ) {
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({
        loginSuccess: true,
        loginFail: false
      });

      AuthenticationService.loginSession(
        this.state.username,
        this.state.password
      );
    } else {
      this.setState({
        loginSuccess: false,
        loginFail: true
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="loginForm">
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-secondary" onClick={this.loginButton}>
              {" "}
              Login{" "}
            </button>
            <br />
            {this.state.loginFail && (
              <div className="text-danger">Invalid Credentials</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
