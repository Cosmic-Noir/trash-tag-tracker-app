import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import "./nav.css";

class Nav extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sites">Trash Sites</Link>
        {this.context.loggedIn === false ? (
          <Link to="/signIn">Sign In</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Nav;
