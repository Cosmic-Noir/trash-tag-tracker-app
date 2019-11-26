import React, { Component } from "react";
import { Link } from "react-router-dom";

/* Custom Components */
import TokenService from "../../auth/token-service";

// Styling and Images:
import logo from "./logo1.png";
import menuIcon from "./menuIcon.png";
import "./nav.css";

/* Context */
import siteContext from "../../siteContext";

class Nav extends Component {
  static contextType = siteContext;

  /* Custom Methods */

  // Responsible for when user clicks Sign Out button
  handleSignOut = () => {
    TokenService.clearAuthToken();
    this.context.checkLoginStatus();
    console.log(window.innerWidth);
  };

  // Responsible for toggling display of mobile nav menu
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
        <Link id="navLogo" to="/">
          <img alt="Logo" className="logo" src={logo} />
        </Link>
        <div className="deskNav">
          <div>
            <Link className="nav" to="/">
              Home
            </Link>
            <Link className="nav" to="/sites">
              Trash Sites
            </Link>
            <Link className="nav" to="/cleaned">
              Cleaned Sites
            </Link>
            {this.context.loggedIn === true ? (
              <Link className="nav" to="/dashboard">
                Dashboard
              </Link>
            ) : (
              ""
            )}
            {this.context.loggedIn === false ? (
              <Link id="signUp" to="/signUp">
                Sign Up
              </Link>
            ) : (
              <Link className="nav" onClick={this.handleSignOut} to="/signOut">
                Sign Out
              </Link>
            )}
          </div>
        </div>
        <img
          alt="menu icon"
          id="menuIcon"
          onClick={this.toggleMobileMenu}
          src={menuIcon}
        />
        <div id="mobileNav">
          <Link className="mobile" onClick={this.toggleMobileMenu} to="/">
            Home
          </Link>
          <Link className="mobile" onClick={this.toggleMobileMenu} to="/sites">
            Trash Sites
          </Link>
          <Link
            className="mobile"
            onClick={this.toggleMobileMenu}
            to="/cleaned"
          >
            Cleaned Sites
          </Link>
          {this.context.loggedIn === true ? (
            <Link
              className="mobile"
              onClick={this.toggleMobileMenu}
              to="/dashboard"
            >
              Dashboard
            </Link>
          ) : (
            ""
          )}
          {this.context.loggedIn === false ? (
            <Link
              className="mobile"
              onClick={this.toggleMobileMenu}
              to="/signUp"
            >
              Sign Up
            </Link>
          ) : (
            <Link className="mobile" onClick={this.handleSignOut} to="/signOut">
              Sign Out
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Nav;
