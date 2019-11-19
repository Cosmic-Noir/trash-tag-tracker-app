import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import TokenService from "../auth/token-service";

// Styling and Images:
import logo from "./logo1.png";
import menuIcon from "./menuIcon.png";
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
        <Link to="/" className="nav" id="navLogo">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <Link to="/" className="nav deskNav">
          Home
        </Link>
        {/* <Link to="/about">Impact</Link> */}
        <Link to="/sites" className="nav deskNav">
          Trash Sites
        </Link>
        <Link to="/cleaned" className="nav deskNav">
          Cleaned Sites
        </Link>
        {this.context.loggedIn === true ? (
          <Link to="/dashboard" className="nav deskNav">
            Dashboard
          </Link>
        ) : (
          ""
        )}
        {this.context.loggedIn === false ? (
          <Link to="/signUp" className="nav deskNav" id="signUp">
            Sign Up
          </Link>
        ) : (
          <Link
            to="/signOut"
            className="nav deskNav"
            onClick={this.handleLogOut}
          >
            Sign Out
          </Link>
        )}
        <img
          src={menuIcon}
          alt="menu icon"
          id="menuIcon"
          onClick="toggleMobileMenu"
        />
      </div>
    );
  }
}

export default Nav;
