import React, { Component } from "react";
import siteContext from "../siteContext";
import { Link } from "react-router-dom";
import "./signIn.css";

class SignIn extends Component {
  state = {
    error: null,
    email: "",
    password: ""
  };

  static contextType = siteContext;

  updateEmail(email) {
    this.setState({ email: email });
  }

  updatePass(password) {
    this.setState({ password: password });
  }

  handleSubmit = e => {
    e.preventDefault();

    // Find matching user in siteData
    // eslint-disable-next-line
    const loggedUser = this.context.users.find(user => {
      if (
        user.email === this.state.email &&
        user.password === this.state.password
      ) {
        this.context.onLogIn();
        return user;
      } else {
        this.setState({ error: "User and e-mail match not found." });
      }
    });
    if (loggedUser !== undefined) {
      this.context.setUserInfo(loggedUser);
      this.props.history.push("/dashboard");
    }
  };

  render() {
    return (
      <div className="signIn">
        <h2>Sign In: </h2>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={this.email}
            onChange={e => this.updateEmail(e.target.value)}
          />
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
          <button type="submit">Log In</button>
        </form>
        <Link to="signUp">Sign Up</Link>
      </div>
    );
  }
}

export default SignIn;
