import React, { Component } from "react";
import siteContext from "../siteContext";

class SignIn extends Component {
  render() {
    return (
      <div className="signIn">
        <h2>Sign In: </h2>
        <form>
          <label>E-mail:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
