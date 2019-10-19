import React, { Component } from "react";
import Sites from "../siteData";
import Site from "../site/site";

export default class SiteList extends Component {
  state = {
    sites: Sites
  };
  render() {
    const trashSites = this.state.sites.sites.map(site => {
      return (
        <Site
          key={site.id}
          title={site.title}
          state={site.state}
          imgSrc={site.imgSrc}
        />
      );
    });
    return (
      <div>
        <h2>Trash Sites:</h2>
        <form>
          <select class="center">
            <option>CO</option>
            <option>NE</option>
            <option>MN</option>
            <option>AZ</option>
          </select>
          <select>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <button type="submit">Filter Results</button>
        </form>
        <ul>{trashSites}</ul>
      </div>
    );
  }
}
