import React, { Component } from "react";
import siteContext from "../siteContext";

class SignOut extends Component {
  static contextType = siteContext;

  componentDidMount() {
    this.context.onLogOut();
  }

  render() {
    return (
      <div className="signOut">
        <h2>You have signed out!</h2>
      </div>
    );
  }
}

export default SignOut;
