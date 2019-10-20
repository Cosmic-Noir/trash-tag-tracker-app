import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import "./signUp.css";

class SignUp extends Component {
  state = {
    error: null,
    id: "",
    username: "",
    email: "",
    password: ""
  };

  static contextType = siteContext;

  updateUsername(username) {
    this.setState({ username: username });
  }

  updateEmail(email) {
    this.setState({ email: email });
  }

  updatePass(password) {
    this.setState({ password: password });
  }

  updateId() {
    this.setState({ id: Math.floor(Math.random() * 1000), error: null });
  }

  handlSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line
    let matchingUser = this.context.users.find(user => {
      if (
        user.email === this.state.email ||
        user.username === this.state.username
      ) {
        return "Error, matching username or email already registered";
      }
    });

    // Check if info empty or missing:
    if (this.state.username.length < 6) {
      this.setState({
        error: `Username length must be greater than 5 characters`
      });
    } else if (this.state.password.length < 6) {
      this.setState({
        error: `Password length must be greater than 5 characters`
      });
    } else if (matchingUser !== undefined) {
      this.setState({
        error: `Username or e-mail already registered`
      });
    } else {
      this.updateId();
      let newUser = this.state;
      this.context.onLogIn();
      this.context.addNewUser(newUser);
      this.context.setUserInfo(newUser);
    }
  };

  // Check if username or e-mail taken, update error for problems

  render() {
    return (
      <div className="signUp">
        <form
          onSubmit={e => {
            this.handlSubmit(e);
          }}
        >
          <label>Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            ref={this.username}
            onChange={e => this.updateUsername(e.target.value)}
          ></input>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={this.email}
            onChange={e => this.updateEmail(e.target.value)}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={this.password}
            onChange={e => this.updatePass(e.target.value)}
          />
          {this.state.error !== null ? (
            <h4 className="error">{this.state.error}</h4>
          ) : (
            ""
          )}
          <button type="submit">Create Account</button>
        </form>
        <Link to="/signIn">Sign In</Link>
      </div>
    );
  }
}

export default SignUp;
