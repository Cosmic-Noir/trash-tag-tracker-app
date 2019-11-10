import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";
import "./cleanList.css";

class CleanList extends Component {
  state = {
    error: "",
    state_abr: "",
    sites: null
  };

  static contextType = siteContext;

  updateState = state_abr => {
    this.setState({ state_abr: state_abr });
  };

  displayList = () => {
    // eslint-disable-next-line
    const sites = this.context.clean_sites.map(site => {
      if (
        this.state.state_abr === "" ||
        this.state.state_abr === site.state_abr
      ) {
        return (
          <Site
            key={site.id}
            id={site.id}
            title={site.title}
            before_img={site.before_img}
            after_img={site.after_img}
            city={site.city}
            state_abr={site.state_abr}
          />
        );
      }
    });
    return sites;
  };

  filterForStates = () => {
    const state_abrs = {};

    return this.context.clean_sites.map(site => {
      const { state_abr } = site;
      console.log(state_abrs);
      console.log("state is " + state_abr);
      // Adding state_abr to state_abrs object
      // if state_abr already exists - then return null
      if (state_abrs[state_abr] === true) {
        console.log("State is already on the list, not adding to object");
        return null;
      } else {
        console.log("State not on list, adding to list and returning option");
        // else if state_abr does not exist - then return option
        state_abrs[state_abr] = true;

        return (
          <option value={state_abr} key={state_abr}>
            {state_abr}
          </option>
        );
      }
    });
  };

  render() {
    return (
      <div className="cleanList">
        <h2> Cleaned Sites:</h2>
        <form className="siteList">
          <select
            className="center"
            name="state_abr"
            id="state_abr"
            value={this.state.state_abr}
            ref={this.state.state_abr}
            onChange={e => this.updateState(e.target.value)}
          >
            <option value="">All</option>
            {this.filterForStates()}
          </select>
        </form>
        {this.displayList()}
      </div>
    );
  }
}

export default CleanList;
