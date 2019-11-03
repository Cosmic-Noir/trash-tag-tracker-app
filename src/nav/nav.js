import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import TokenService from "../auth/token-service";
import "./nav.css";

class Nav extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">Impact</Link>
        <Link to="/sites">Trash Sites</Link>
        <Link to="/cleaned">Cleaned Sites</Link>
        {TokenService.hasAuthToken() === true ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          ""
        )}
        {TokenService.hasAuthToken() === false ? (
          <Link to="/signIn">Sign In</Link>
        ) : (
          <Link to="/signOut">Sign Out</Link>
        )}
      </div>
    );
  }
}

export default Nav;
