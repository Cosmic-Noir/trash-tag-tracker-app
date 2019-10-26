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

  // Create seperate funciton to check for clean status first
  cleanStates = sites => {
    return sites.filter(({ clean }) => {
      if (clean === "true") {
        console.log("things");
      }
    });
  };

  render() {
    // eslint-disable-next-line
    // explore .filter - performance
    const cleanSites = this.context.sites.map(
      ({ stateAbr, id, title, beforeImg, afterImg, clean }) => {
        if (
          clean === "true" &&
          (this.state.stateAbr === "" || this.state.stateAbr === stateAbr)
        ) {
          return (
            <Site
              key={id}
              id={id}
              title={title}
              stateAbr={stateAbr}
              beforeImg={beforeImg}
              afterImg={afterImg}
            />
          );
        }
      }
    );

    // Explore - reduce() - use one loop
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

    const { stateAbr } = this.state;

    return (
      <div className="cleanList">
        <h2> Cleaned Sites:</h2>
        <form className="siteList">
          <select
            className="center"
            name="stateAbr"
            id="stateAbr"
            value={stateAbr}
            ref={stateAbr}
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
