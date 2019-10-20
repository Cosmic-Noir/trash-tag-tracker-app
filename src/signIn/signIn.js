import React, { Component } from "react";
import Sites from "../siteData";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  updateEmail(email) {
    this.setState({ email: email });
  }

  updatePass(password) {
    this.setState({ password: password });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(
      `Log In pressed, user: ${this.state.email}  pass: ${this.state.password}`
    );

    // Find matching user in siteData
    const loggedUser = Sites.users.find(user => {
      if (
        user.email === this.state.email &&
        user.password === this.state.password
      ) {
        console.log("A matching user was found");
        console.log(user);
        return user;
      }
    });
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
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
