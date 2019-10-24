import React, { Component } from "react";
import siteContext from "../siteContext";
import { Link } from "react-router-dom";
import Site from "../site/site";
import "./siteList.css";

export default class SiteList extends Component {
  state = {
    stateAbr: "",
    clean: ""
  };

  static contextType = siteContext;

  //  Methods to update state
  updateClean = trueOrFalse => {
    this.setState({ clean: trueOrFalse });
  };

  updateState = state => {
    this.setState({ stateAbr: state });
  };

  render() {
    // eslint-disable-next-line
    const trashSites = this.context.sites.map(site => {
      if (
        (this.state.clean === "" || site.clean === this.state.clean) &&
        (this.state.stateAbr === "" || site.stateAbr === this.state.stateAbr)
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

    const stateOptions = this.context.sites.map(site => {
      return <option value={site.stateAbr}>{site.stateAbr}</option>;
    });
    return (
      <div className="siteList">
        <h2>Trash Sites:</h2>
        {this.context.loggedIn === true ? (
          <Link to="/addSite">Add New Trash Site</Link>
        ) : (
          <h5>Log in to add a new site</h5>
        )}
        <form className="siteList" onSubmit={e => this.handleSubmit(e)}>
          <select
            className="center"
            name="clean"
            id="clean"
            ref={this.clean}
            value={this.state.clean}
            onChange={e => this.updateClean(e.target.value)}
          >
            <option value="">All Sites</option>
            <option value={false}>Trashed</option>
            <option value={true}>Clean</option>
          </select>
          <select
            className="center"
            name="stateAbr"
            id="stateAbr"
            value={this.state.stateAbr}
            ref={this.state.stateAbr}
            onChange={e => this.updateState(e.target.value)}
          >
            <option value="">All</option>
            {stateOptions}
            {/* <option value="CO">CO</option>
            <option value="NE">NE</option>
            <option value="MN">MN</option> */}
          </select>

          {/* <select>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select> */}
        </form>
        <ul className="siteList">{trashSites}</ul>
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
