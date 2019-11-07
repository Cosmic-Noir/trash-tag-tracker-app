import React, { Component } from "react";
import siteContext from "../siteContext";
import { Link } from "react-router-dom";
import Site from "../site/site";
import config from "../config";
import "./trashList.css";

class TrashList extends Component {
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
    const sites = this.context.trash_sites.map(site => {
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
    const stateOptions = this.context.trash_sites.map(site => {
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
    this.setState({ error: null });
  }

  render() {
    return (
      <div className="siteList">
        <h2>Trash Sites:</h2>
        {this.context.loggedIn === true ? (
          <Link to="/addSite">Add New Trash Site</Link>
        ) : (
          <h5>Log in to add a new site</h5>
        )}
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
        <ul className="siteList" id="siteList">
          {this.state.error === null ? (
            this.displayList()
          ) : (
            <p>{this.state.error}</p>
          )}
        </ul>
        <footer>
          {this.context.loggedIn === false ? (
            <Link to="/signUp">Sign Up</Link>
          ) : (
            ""
          )}
        </footer>
      </div>
    );
  }
}

export default TrashList;