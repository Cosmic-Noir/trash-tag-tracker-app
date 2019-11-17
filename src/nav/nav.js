import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import TokenService from "../auth/token-service";

// Styling and Images:
import logo from "./logo1.png";
import "./nav.css";

class Nav extends Component {
  static contextType = siteContext;

  handleLogOut = () => {
    TokenService.clearAuthToken();
    this.context.checkLoginStatus();
  };

  render() {
    return (
      <div className="navBar">
        <img src={logo} alt="Logo" className="logo" />

        <Link to="/" className="nav">
          Home
        </Link>
        {/* <Link to="/about">Impact</Link> */}
        <Link to="/sites" className="nav">
          Trash Sites
        </Link>
        <Link to="/cleaned" className="nav">
          Cleaned Sites
        </Link>
        {this.context.loggedIn === true ? (
          <Link to="/dashboard" className="nav">
            Dashboard
          </Link>
        ) : (
          ""
        )}
        {this.context.loggedIn === false ? (
          <Link to="/signUp" className="nav" id="signUp">
            Sign Up
          </Link>
        ) : (
          <Link to="/signOut" className="nav" onClick={this.handleLogOut}>
            Sign Out
          </Link>
        )}
      </div>
    );
  }
}

export default Nav;
