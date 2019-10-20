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
    this.setState({ id: Math.floor(Math.random() * 1000) });
  }

  handlSubmit = e => {
    e.preventDefault();
    console.log(`Create Account pressed, checking info...`);

    // Check if info empty or missing:
    if (this.state.username.length < 6) {
      console.log("does");
    }

    // Check if username or e-mail taken, update error for problems
  };

  render() {
    return (
      <div className="signUp">
        <form>
          <label>Username:</label>
          <input type="text"></input>
          <label>Email:</label>
          <input type="email"></input>
          <label>Password:</label>
          <input type="password"></input>
          <button type="submit">Create Account</button>
        </form>
        <Link to="/signIn">Sign In</Link>
      </div>
    );
  }
}

export default SignUp;
