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
  updateTotalSitesCleaned = () => {
    const numbSites = this.context.clean_sites.length;
    this.setState({ totalSitesCleaned: numbSites });
    const totalScore = numbSites * 5;
    this.updateTotalScore(totalScore);
  };

  updateTotalScore = totalScore => {
    this.setState({ totalScore: totalScore });
  };

  componentDidMount() {
    this.updateTotalSitesCleaned();
  }

  render() {
    return (
      <div className="flex-column impact">
        <h2>Impact</h2>
        <h1 id="totalScore">{this.state.totalScore}</h1>
        <p>
          The above score is displays all points earned by every user of the
          app. Users have cleaned a total of{" "}
          <span id="totalSites">
            <strong>{this.state.totalSitesCleaned}</strong>
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
