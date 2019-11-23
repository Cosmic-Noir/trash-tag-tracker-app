import React, { Component } from "react";
import siteContext from "../../siteContext";

// Styling & Images
import "./about.css";

// Maybe use this as a score page or to track impact from score
// Component not currently in use

class About extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div className="about">
        <h2>Total EnvoScore of All Users:</h2>
        <h2>{this.context.totalScore}</h2>
        <p>
          The above score is displays all points earned by every user of the
          app. This part of the app is currently undergoing construction...{" "}
        </p>
        <p></p>
      </div>
    );
  }
}

export default About;
