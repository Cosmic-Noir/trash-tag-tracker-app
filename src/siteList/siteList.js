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
        <ul>{trashSites}</ul>
      </div>
    );
  }
}
