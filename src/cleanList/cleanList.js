import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";
import "./cleanList.css";

class CleanList extends Component {
  state = {
    stateAbr: ""
  };

  static contextType = siteContext;

  // Methods to update state
  updateState = state => {
    this.setState({ stateAbr: state });
  };

  render() {
    // eslint-disable-next-line
    const cleanSites = this.context.sites.map(site => {
      if (
        site.clean === "true" &&
        (this.state.stateAbr === "" || this.state.stateAbr === site.stateAbr)
      ) {
        return (
          <Site
            key={site.id}
            id={site.id}
            title={site.title}
            stateAbr={site.stateAbr}
            beforeImg={site.beforeImg}
            afterImg={site.afterImg}
          />
        );
      }
    });
    // Create array of all states there are sites for
    const stateOptions = this.context.sites.map(site => {
      if (site.clean === "true") {
        return site.stateAbr;
      }
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
        <form className="siteList">
          <select
            className="center"
            name="stateAbr"
            id="stateAbr"
            value={this.state.stateAbr}
            ref={this.state.stateAbr}
            onChange={e => this.updateState(e.target.value)}
          >
            <option value="">All</option>
            {options}
          </select>

          {/* <select>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select> */}
        </form>
        {cleanSites}
      </div>
    );
  }
}

export default CleanList;
