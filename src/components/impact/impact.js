import React, { Component } from "react";

/* Styling & Images */
import "./impact.css";
import earthPic from "../landing/images/earth2.jpg";

// Context
import siteContext from "../../siteContext";

class Impact extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div
        className="flex-column dark impact"
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
        <p>
          According to the{" "}
          <a
            className="inPLink"
            href="https://www.epa.gov/trash-free-waters/impacts-mismanaged-trash"
          >
            United States Enviornmental Protection Agency(EPA)
          </a>
          , the impact of mismanaged trash has a huge impact on both human and
          wildlife health. While the best way to tackle our trash problem is
          prevention, there are many sites across our planet that are suffering
          from the human-induced trash problem. Here at TrashTracker we desire
          to undo the damage humans have caused so far, while also spreading
          information to prevent waste creation in the first place.{" "}
        </p>
        <br />
        <p>
          There is only <strong>one earth</strong>, and we have a responsibility
          to protect it.
        </p>
        <img className="earth" src={earthPic} alt="earth" />
      </div>
    );
  }
}

export default Impact;
