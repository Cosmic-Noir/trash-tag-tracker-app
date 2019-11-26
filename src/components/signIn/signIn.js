import config from "../../config";
import { Link } from "react-router-dom";
import React, { Component } from "react";

/* Custom Components */
import TokenService from "../../auth/token-service";

/* Styling & Images */
import "./signIn.css";

/* Context */
import siteContext from "../../siteContext";

class SignIn extends Component {
  state = {
    error: null,
    username: "",
    pass: ""
  };

  static contextType = siteContext;

  /* State updating methods */
  updateUsername(username) {
    this.setState({ username: username });
  }

  updatePass(pass) {
    this.setState({ pass: pass });
  }

  /* Custom Methods */

  // Responsible for POST request for user login from state
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
        this.context.checkLoginStatus();
        this.props.history.push("/dashboard");
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  // Responsible for validating form input and setting error state
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
      <div
        className="flex-column signIn"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <form
          className="formBorder"
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <h2 className="title">Sign In: </h2>
          <input
            className="formInput"
            id="username"
            name="username"
            onChange={e => this.updateUsername(e.target.value)}
            placeholder="username"
            ref={this.username}
            required
            type="username"
          />
          <input
            className="formInput"
            id="pass"
            name="pass"
            onChange={e => this.updatePass(e.target.value)}
            placeholder="password"
            required
            ref={this.pass}
            type="password"
          />
          {this.state.error !== null ? (
            <h4 className="error">{this.state.error}</h4>
          ) : (
            ""
          )}
          <button className="whiteButton" type="submit">
            Log In
          </button>
        </form>
        <Link className="whiteButton" to="signUp">
          Sign Up
        </Link>
      </div>
    );
  }
}

export default SignIn;
