import React, { Component } from "react";
import siteContext from "../../siteContext";
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
    this.setState({ state_abr });
  };

  displayList = () => {
    // eslint-disable-next-line
    const sites = this.context.clean_sites.map(site => {
      const {
        id,
        title,
        before_img,
        after_img,
        city,
        state_abr,
        content
      } = site;
      if (this.state.state_abr === "" || this.state.state_abr === state_abr) {
        return (
          <Site
            key={id}
            id={id}
            title={title}
            before_img={before_img}
            after_img={after_img}
            city={city}
            state_abr={state_abr}
            content={content}
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
      // Adding state_abr to state_abrs object
      // if state_abr already exists - then return null
      if (state_abrs[state_abr] === true) {
        return null;
      } else {
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
      <div className="cleanList flex-column">
        <h2 className="title"> Cleaned Sites:</h2>
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
        <ul className="siteList">{this.displayList()}</ul>
      </div>
    );
  }
}

export default CleanList;
