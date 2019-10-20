import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";

export default class SiteList extends Component {
  static contextType = siteContext;

  state = {
    state: "",
    clean: "false"
  };

  updateClean(trueOrFalse) {
    this.setState({ clean: trueOrFalse });
  }

  render() {
    console.log(
      `Component re-rendered, clean state is now: ${this.state.clean}`
    );
    const trashSites = this.context.sites.sites.map(site => {
      if (site.clean == this.state.clean) {
        return (
          <Site
            key={site.id}
            id={site.id}
            title={site.title}
            state={site.state}
            beforeImg={site.beforeImg}
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
            <option value={false}>Trashed</option>
            <option value={true}>Clean</option>
          </select>
          <select className="center">
            <option>CO</option>
            <option>NE</option>
            <option>MN</option>
            <option>AZ</option>
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
