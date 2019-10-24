import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";

class Dashboard extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div className="dashboard">
        <h2>Welcome back {this.context.userInfo.username}</h2>
        <h3>EnvoScore: {this.context.userInfo.score}</h3>
        <h3>What would you like to do?</h3>
        <Link to="/sites">View Trash Sites</Link>
        <Link to="/about">View Our Mission</Link>
        <Link to="/donate">Donate</Link>
      </div>
    );
  }
}

export default Dashboard;
