import React, { Component } from "react";

/* Styling & Images */
import "./impact.css";

// Context
import siteContext from "../../siteContext";

// Maybe use this as a score page or to track impact from score
// Component not currently in use

class Impact extends Component {
  state = {
    totalSitesCleaned: "",
    totalScore: ""
  };

  static contextType = siteContext;

  /* State updating methods */

  render() {
    return (
      <div className="flex-column impact">
        <h2>Impact</h2>
        <p>
          The above score is displays all points earned by every user of the
          app. This part of the app is currently undergoing construction...{" "}
        </p>
        <p></p>
      </div>
    );
  }
}

export default Impact;
