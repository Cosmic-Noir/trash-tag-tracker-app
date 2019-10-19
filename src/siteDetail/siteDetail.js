import React, { Component } from "react";
import siteContext from "../siteContext";
import Site from "../site/site";

class SiteDetail extends Component {
  static contextType = siteContext;

  render() {
    console.log("SiteDetail is rendering...");
    // eslint-disable-next-line
    const selectedSite = this.context.sites.sites.find(site => {
      const numberProp = parseInt(this.props.match.params.siteId);
      console.log(site.id + " " + numberProp);
      if (site.id === numberProp) {
        console.log(`There was a match and returned ${site}`);
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
          imgSrc={selectedSite.imgSrc}
        />
        <p className="desc">{selectedSite.description}</p>
      </div>
    );
  }
}

export default SiteDetail;
