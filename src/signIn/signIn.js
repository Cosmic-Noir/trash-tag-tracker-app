import React, { Component } from "react";
import siteContext from "../siteContext";
import { Link } from "react-router-dom";
import config from "../config";
import TokenService from "../auth/token-service";
import "./signIn.css";

class SignIn extends Component {
  state = {
    error: null,
    username: "",
    pass: ""
  };

  static contextType = siteContext;

  updateUsername(username) {
    this.setState({ username: username });
  }

  updatePass(pass) {
    this.setState({ pass: pass });
  }

  login = () => {
    const url = config.API_ENDPOINT + "login";

    const credentials = {
      username: this.state.username,
      pass: this.state.pass
    };

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(error => {
            this.setState({ error: error.error });
            throw error;
          });
        }
        return res.json();
      })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username.length < 6) {
      this.setState({
        error: "Error, valid usernames are at least 6 characters"
      });
    } else if (this.state.pass.length < 6) {
      this.setState({
        error: "Error, valid password is at least 6 characters"
      });
    } else {
      this.login();
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
          <label>Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            ref={this.username}
            required
            onChange={e => this.updateUsername(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            name="pass"
            id="pass"
            ref={this.pass}
            required
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
