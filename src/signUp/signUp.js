import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import config from "../config";
import "./signUp.css";

class SignUp extends Component {
  state = {
    error: null,
    id: "",
    username: "",
    email: "",
    password: "",
    passTwo: ""
  };

  static contextType = siteContext;

  updateUsername = username => {
    this.setState({ username: username });
  };

  updateEmail = email => {
    this.setState({ email: email });
  };

  updatePass = password => {
    this.setState({ password: password });
  };

  updateId = () => {
    this.setState({ id: Math.floor(Math.random() * 1000), error: null });
  };

  updatePassTwo = passTwo => {
    this.setState({ passTwo: passTwo });
  };

  handlSubmit = e => {
    e.preventDefault();

    // Check if info empty or missing:
    if (this.state.username.length < 6) {
      this.setState({
        error: `Username length must be greater than 5 characters`
      });
    } else if (this.state.email.length < 6) {
      this.setState({
        error: `Must enter valid e-mail addres`
      });
    } else if (this.state.password.length < 6) {
      this.setState({
        error: `Password length must be greater than 5 characters`
      });
    } else if (this.state.password !== this.state.passTwo) {
      this.setState({
        error: `Password fields must match`
      });
    } else {
      this.postNewUser();
      // this.context.onLogIn();
      // this.context.addNewUser(newUser);
      // this.context.setUserInfo(newUser);
    }
  };

  postNewUser = () => {
    const url = config.API_ENDPOINT + "users";

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      pass: this.state.password
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json"
      }
    }).then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          this.setState({ error: error.error });
          throw error;
        });
      }
      this.props.history.push("/signIn");
      return res.json();
    });
  };

  render() {
    return (
      <div className="signUp">
        <h3 className="title">Sign Up:</h3>
        <form
          onSubmit={e => {
            this.handlSubmit(e);
          }}
        >
          <input
            className="formInput"
            id="username"
            name="username"
            onChange={e => this.updateUsername(e.target.value)}
            placeholder="username"
            ref={this.username}
            required
            type="text"
          ></input>
          <input
            className="formInput"
            id="email"
            name="email"
            onChange={e => this.updateEmail(e.target.value)}
            placeholder="e-mail"
            required
            ref={this.email}
            type="email"
          ></input>
          <input
            className="formInput"
            id="password"
            name="password"
            onChange={e => this.updatePass(e.target.value)}
            placeholder="password"
            ref={this.password}
            required
            type="password"
          />
          <input
            className="formInput"
            id="passTwo"
            name="passTwo"
            onChange={e => this.updatePassTwo(e.target.value)}
            placeholder="repeat password"
            ref={this.passTwo}
            required
            type="password"
          />
          {this.state.error !== null ? (
            <h4 className="error">{this.state.error}</h4>
          ) : (
            ""
          )}
          <button className="whiteButton" type="submit">
            Create Account
          </button>
        </form>
        <Link className="whiteButton" to="/signIn">
          Sign In
        </Link>
      </div>
    );
  }
}

export default SignUp;
