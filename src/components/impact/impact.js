import React, { Component } from "react";

/* Styling & Images */
import "./impact.css";

// Context
import siteContext from "../../siteContext";

// Maybe use this as a score page or to track impact from score
// Component not currently in use

class Impact extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div
        className="flex-column impact"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h2>Impact</h2>
        <h1 id="totalScore">{this.context.totalScore}</h1>
        <p>
          The above score is displays all points earned by every user of the
          app. Users have cleaned a total of{" "}
          <span id="totalSites">
            <strong>{this.context.totalSitesCleaned}</strong>
          </span>{" "}
          sites!
        </p>
        <br />
        <p>Together we can make an impact!</p>
      </div>
    );
  }
}

export default Impact;
