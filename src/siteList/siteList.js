import React, { Component } from "react";
import siteContext from "../siteContext";
import { Link } from "react-router-dom";
import SignUp from "../signUp/signUp";
import Site from "../site/site";

export default class SiteList extends Component {
  static contextType = siteContext;

  state = {
    stateAbr: "",
    clean: ""
  };

  updateClean(trueOrFalse) {
    this.setState({ clean: trueOrFalse });
  }

  updateState(state) {
    this.setState({ stateAbr: state });
  }

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
            state={site.stateAbr}
            beforeImg={site.beforeImg}
            afterImg={site.afterImg}
          />
        );
      }
    });
    return (
      <div>
        <h2>Trash Sites:</h2>
        <Link to="/addSite">Add New Trash Site</Link>
        <form>
          <select
            className="center"
            name="clean"
            id="clean"
            ref={this.clean}
            onChange={e => this.updateClean(e.target.value)}
          >
            <option value="">All Sites</option>
            <option value={false}>Trashed</option>
            <option value={true}>Clean</option>
          </select>
          <select
            className="center"
            name="state"
            id="state"
            ref={this.state.state}
            onChange={e => this.updateState(e.target.value)}
          >
            <option value="">All</option>
            <option value="CO">CO</option>
            <option value="NE">NE</option>
            <option value="MN">MN</option>
          </select>
          {/* <select>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select> */}
        </form>
        <ul>{trashSites}</ul>
        <footer>{this.context.loggedIn === false ? <SignUp /> : ""}</footer>
      </div>
    );
  }
}
