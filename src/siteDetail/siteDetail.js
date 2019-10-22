import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import Site from "../site/site";
import "./siteDetail.css";

class SiteDetail extends Component {
  static contextType = siteContext;

  render() {
    // eslint-disable-next-line
    const selectedSite = this.context.sites.find(site => {
      const numberProp = parseInt(this.props.match.params.siteId);
      if (site.id === numberProp) {
        // console.log(site);
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
          stateAbr={selectedSite.stateAbr}
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
        {this.context.loggedIn === false && selectedSite.clean === "false" ? (
          <h5>Sign in to mark this site as cleaned or view comments.</h5>
        ) : (
          <h5>Sign in to view or add comments.</h5>
        )}
        {this.context.loggedIn === false ? (
          <Link to="/signUp">Sign Up</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SiteDetail;
