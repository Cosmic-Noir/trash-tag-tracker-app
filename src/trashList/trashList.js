import React, { Component } from "react";
import siteContext from "../siteContext";
import { Link } from "react-router-dom";
import Site from "../site/site";
import "./trashList.css";

class TrashList extends Component {
  state = {
    state_abr: ""
  };

  static contextType = siteContext;

  updateState = state_abr => {
    this.setState({ state_abr: state_abr });
  };
  displayList = () => {
    // eslint-disable-next-line
    const sites = this.context.trash_sites.map(site => {
      const { id, title, before_img, city, state_abr } = site;
      if (
        this.state.state_abr === "" ||
        this.state.state_abr === site.state_abr
      ) {
        return (
          <Site
            key={id}
            id={id}
            title={title}
            before_img={before_img}
            city={city}
            state_abr={state_abr}
          />
        );
      }
    });
    return sites;
  };

  filterForStates = () => {
    const state_abrs = {};

    return this.context.trash_sites.map(site => {
      const { state_abr } = site;

      // Adding state_abr to state_abrs object
      // if state_abr already exists - then return null
      if (state_abrs[state_abr] === true) {
        return null;
      }
      // else if state_abr does not exist - then return option
      state_abrs[state_abr] = true;

      return (
        <option value={state_abr} key={state_abr}>
          {state_abr}
        </option>
      );
    });
  };

  render() {
    return (
      <div className="flex-column">
        <h2 className="listTitle">Trash Sites:</h2>
        {this.context.loggedIn === true ? (
          <Link to="/addSite" className="addNewSite">
            Add New Trash Site
          </Link>
        ) : (
          <h5>Log in to add a new site</h5>
        )}
        <div className="siteList">
          <form className="siteList">
            <h3>Filter by State:</h3>
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
      </div>
    );
  }
}

export default TrashList;
