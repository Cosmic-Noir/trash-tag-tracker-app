import React, { Component } from "react";
import siteContext from "../siteContext";
import "./about.css";

class About extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div className="about">
        <h2>Total EnvoScore of All Users:</h2>
        <h2>{this.context.totalScore}</h2>
        <h2>About:</h2>
        <p>Tackling our trash problem together!!</p>
        <p>
          Riding on the wave of growing enviornmental awarness and the TrashTag
          Challenge that went viral, TrashTag Tracker aims to make it easy to
          report a trash site, communicate with others regarding the site, and
          clean up more and bigger sites together.{" "}
        </p>
        <p>
          This app tracks and calculates an enviornmental impact score for each
          user and for all users combined. We believe that every small
          contribution to preserving our planet contributes to a measurable
          impact on both enviornments and communities.
        </p>
      </div>
    );
  }
}

export default About;
