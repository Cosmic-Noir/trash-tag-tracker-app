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
      <div className="navBar">
          <Link to="/" className="nav" id="navLogo">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        <div className="deskNav">

          <div >
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
            <Link to="/signUp" id="signUp">
              Sign Up
            </Link>
          ) : (
            <Link
              to="/signOut"
              className="nav"
              onClick={this.handleLogOut}
            >
              Sign Out
            </Link>
          )}
            </div>
          
        </div><img
            alt="menu icon"
            id="menuIcon"
            onClick={this.toggleMobileMenu}
            src={menuIcon}
          />
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
