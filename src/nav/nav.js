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
    this.toggleMobileMenu();
  };

  toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileNav");
    if (
      mobileMenu.style.display === "" ||
      mobileMenu.style.display === "none"
    ) {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none";
    }
  };

  render() {
    return (
      <div>
        <div className="deskNavBar">
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
            alt="menu icon"
            id="menuIcon"
            onClick={this.toggleMobileMenu}
            src={menuIcon}
          />
        </div>
        <div id="mobileNav">
          <Link to="/" className="nav mobile" onClick={this.toggleMobileMenu}>
            Home
          </Link>
          {/* <Link to="/about">Impact</Link> */}
          <Link
            to="/sites"
            className="nav mobile"
            onClick={this.toggleMobileMenu}
          >
            Trash Sites
          </Link>
          <Link
            to="/cleaned"
            className="nav mobile"
            onClick={this.toggleMobileMenu}
          >
            Cleaned Sites
          </Link>
          {this.context.loggedIn === true ? (
            <Link
              to="/dashboard"
              className="nav mobile"
              onClick={this.toggleMobileMenu}
            >
              Dashboard
            </Link>
          ) : (
            ""
          )}
          {this.context.loggedIn === false ? (
            <Link
              to="/signUp"
              className="nav mobile"
              onClick={this.toggleMobileMenu}
            >
              Sign Up
            </Link>
          ) : (
            <Link
              to="/signOut"
              className="nav mobile"
              onClick={this.handleLogOut}
            >
              Sign Out
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Nav;
