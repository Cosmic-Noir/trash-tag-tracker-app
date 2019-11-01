import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";
import config from "../config";
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

  // Get trashSites
  getCleanSites = () => {
    const url = config.API_ENDPOINT + "sites/clean";
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "applicatin/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setSites)
      .then(console.log("Request for all sites sent"))
      .catch(error => this.setState({ error }));
  };

  // Set state of trashSites
  setSites = sites => {
    this.setState({ sites: sites, error: null });
  };

  displayList = () => {
    const sites = this.state.sites.map(site => {
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
    // array of state_abr
    const stateOptions = this.state.sites.map(site => {
      return site.state_abr;
    });
    // remove duplicates
    let filterOptions = [...new Set(stateOptions)];
    // turn array into option elements
    return filterOptions.map(state => {
      return (
        <option value={state} key={state}>
          {state}
        </option>
      );
    });
  };

  componentDidMount() {
    this.getCleanSites();
  }

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
            {this.state.error === null ? this.filterForStates() : ""}
          </select>
        </form>
        {this.state.error === null ? (
          this.displayList()
        ) : (
          <p>{this.state.error}</p>
        )}
      </div>
    );
  }
}

export default CleanList;
