import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import "./landing.css";

class Landing extends Component {
  static contextType = siteContext;
  render() {
    return (
      <div className="landing">
        <h1>Welcome to TrashTag Tracker!</h1>
        <p>
          Have you ever wanted to participate in the TrashTag challenge but felt
          unsure as to where to start?
        </p>

        <p>
          Now you have the perfect place to start. Browse reported trash sites
          by other users, post new trash sites, and mark them as cleaned up!
          Make a real impact by joining forces with hundreds of others to
          transform our planet into a cleaner and more habitable place, one site
          at a time.
        </p>

        <footer>
          {this.context.loggedIn === false ? (
            <Link to="/signUp">Sign Up</Link>
          ) : (
            ""
          )}
        </footer>
      </div>
    );
  }
}

export default Landing;
