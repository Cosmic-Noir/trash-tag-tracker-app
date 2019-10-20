import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";

export default class SiteList extends Component {
  static contextType = siteContext;

  state = {
    state: "",
    clean: ""
  };

  updateClean(trueOrFalse) {
    this.setState({ clean: trueOrFalse });
  }

  updateState(state) {
    this.setState({ state: state });
  }

  render() {
    console.log(
      `Component re-rendered, clean state is now: ${this.state.clean}`
    );
    const trashSites = this.context.sites.sites.map(site => {
      if (
        (this.state.clean === "" || site.clean === this.state.clean) &&
        (this.state.state === "" || site.state === this.state.state)
      ) {
        return (
          <Site
            key={site.id}
            id={site.id}
            title={site.title}
            state={site.state}
            beforeImg={site.beforeImg}
            afterImg={site.afterImg}
          />
        );
      }
    });
    return (
      <div>
        <h2>Trash Sites:</h2>
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
            ref={this.state}
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
          <button type="submit">Filter Results</button>
        </form>
        <ul>{trashSites}</ul>
      </div>
    );
  }
}
