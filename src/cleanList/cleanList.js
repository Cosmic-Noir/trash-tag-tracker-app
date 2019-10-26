import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";

class cleanList extends Component {
  state = {
    stateAbr: ""
  };

  static contextType = siteContext;

  // Methods to update state
  updateState = state => {
    this.setState({ state: state });
  };

  render() {
    // eslint-disable-next-line
    const cleanSites = this.context.sites.map(site => {
      if (site.clean === false) {
        return (
          <Site
            key={site.id}
            id={site.id}
            title={site.title}
            stateAbr={site.stateAbr}
            beofreImage={site.beforeImg}
            afterImg={site.afterImg}
          />
        );
      }
    });
    // Create array of all states there are sites for
    const stateOptions = this.context.sites.map(site => {
      return site.stateAbr;
    });
    // Filter to create unique lists
    let filterOptions = [...new Set(stateOptions)];
    // Creat options out of filtered array
    const options = filterOptions.map(state => {
      return (
        <option value={state} key={state}>
          {state}
        </option>
      );
    });

    return (
      <div className="cleanList">
        <h2> Cleaned Sites:</h2>
      </div>
    );
  }
}
