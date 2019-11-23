import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard flex-column">
        <h2 className="title">Welcome back </h2>
        {/* <h3>EnvoScore: </h3> */}
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
        {/* <Link to="/about">View Our Mission</Link>
        <Link to="/donate">Donate</Link> */}
      </div>
    );
  }
}

export default Dashboard;
