import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";

export default class SiteDetail extends Component {
  static contextType = siteContext;

  render() {
    const selectedSite = this.context.sites.sites.find(site => {
      const numberProp = parseInt(this.props.match.params.siteId);
      if (site.id === numberProp) {
        return site;
      }
    });
    return (
      <div className="siteDetail">
        <Site
          key={selectedSite.id}
          id={selectedSite.id}
          title={selectedSite.title}
          address={selectedSite.address}
          state={selectedSite.state}
          description={selectedSite.description}
          imgSrc={selectedSite.imgSrc}
        />
      </div>
    );
  }
}
