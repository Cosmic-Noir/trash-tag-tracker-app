import React, { Component } from "react";
import { Link } from "react-router-dom";

// Should perhaps turn this into a function, OR update with user info to display
class Dashboard extends Component {
  render() {
    return (
      <div
        className="dashboard flex-column"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <h2 className="title">Welcome back!</h2>
        <h3 className="subtitle">What would you like to do?</h3>
        <Link className="whiteButton" to="/sites">
          View Trash Sites
        </Link>
        <Link className="whiteButton" to="/cleaned">
          View Cleaned Sites
        </Link>
        <Link className="whiteButton" to="/addSite">
          Add New Trash Site
        </Link>
      </div>
    );
  }
}

export default Dashboard;
