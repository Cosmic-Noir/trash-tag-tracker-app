import React, { Component } from "react";
import siteContext from "../siteContext";
import "./about.css";

// Maybe use this as a score page or to track impact from score

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
