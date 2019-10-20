import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import Site from "../site/site";
import "./siteDetail.css";

class SiteDetail extends Component {
  static contextType = siteContext;

  render() {
    // eslint-disable-next-line
    const selectedSite = this.context.sites.sites.find(site => {
      const numberProp = parseInt(this.props.match.params.siteId);
      if (site.id === numberProp) {
        // console.log(site);
        return site;
      }
    });
    console.log(this.context.loggedIn);
    return (
      <div className="siteDetail">
        <Site
          key={selectedSite.id}
          id={selectedSite.id}
          title={selectedSite.title}
          address={selectedSite.address}
          state={selectedSite.state}
          beforeImg={selectedSite.beforeImg}
          afterImg={selectedSite.afterImg}
        />
        <p className="desc">{selectedSite.description}</p>
        <Link to="/sites">Back</Link>
        {selectedSite.clean === "false" && this.context.loggedIn === true ? (
          <Link to={`/cleanSite/${selectedSite.id}`}>Mark as Cleaned!</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SiteDetail;
