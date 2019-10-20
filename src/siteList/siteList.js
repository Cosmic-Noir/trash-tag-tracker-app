import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";

export default class SiteList extends Component {
  static contextType = siteContext;

  render() {
    const trashSites = this.context.sites.sites.map(site => {
      return (
        <Site
          key={site.id}
          id={site.id}
          title={site.title}
          state={site.state}
          beforeImg={site.beforeImg}
        />
      );
    });
    return (
      <div>
        <h2>Trash Sites:</h2>
        <form>
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
