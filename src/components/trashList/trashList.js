import React, { Component } from "react";
import { Link } from "react-router-dom";

/* Custom Components */
import Site from "../site/site";
import "./trashList.css";
import siteContext from "../../siteContext";

class TrashList extends Component {
  state = {
    state_abr: ""
  };

  static contextType = siteContext;

  /* State updating methods */
  updateState = state_abr => {
    this.setState({ state_abr: state_abr });
  };

  /* Custom Methods */

  // Responsible for taking context-passed trash_sites and returning array of site components
  displayList = () => {
    // eslint-disable-next-line
    const sites = this.context.trash_sites.map(site => {
      const { id, title, before_img, city, state_abr, content, clean } = site;
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
            content={content}
            clean={clean}
          />
        );
      }
    });
    return sites;
  };

  // Responsible for creating unique state option list from context-passed sites - returns option elements
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
      <div className="flex-column" data-aos="fade-in" data-aos-duration="1000">
        <h2 className="title">Trash Sites:</h2>
        {this.context.loggedIn === true ? (
          <Link className="whiteButton" to="/addSite">
            Add New Trash Site
          </Link>
        ) : (
          <Link className="whiteButton" to="/signIn">
            <h5>Sign in to add a new site</h5>
          </Link>
        )}
        <div className="siteList">
          <form className="siteList">
            <h3>Filter by State:</h3>
            <select
              className="center"
              id="state_abr"
              name="state_abr"
              onChange={e => this.updateState(e.target.value)}
              ref={this.state.state_abr}
              value={this.state.state_abr}
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
