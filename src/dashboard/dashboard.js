import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";

class Dashboard extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div className="dashboard">
        <h2>Welcome back </h2>
        {/* <h3>EnvoScore: </h3> */}
        <h3>What would you like to do?</h3>
        <Link to="/sites">View Trash Sites</Link>
        <Link to="/cleaned">View Cleaned Sites</Link>
        <Link to="/addSite">Add New Trash Site</Link>
        {/* <Link to="/about">View Our Mission</Link>
        <Link to="/donate">Donate</Link> */}
      </div>
    );
  }
}

export default Dashboard;
