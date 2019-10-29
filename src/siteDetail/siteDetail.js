import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import Site from "../site/site";
import CommentList from "../commentList/commentList";
import "./siteDetail.css";

class SiteDetail extends Component {
  static contextType = siteContext;

  handleClickBack = () => {
    this.props.history.goBack();
  };

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
          city={selectedSite.city}
          addrss={selectedSite.addrss}
          state_abr={selectedSite.state_abr}
          content={selectedSite.content}
          before_img={selectedSite.before_img}
          after_img={selectedSite.after_img}
        />

        {selectedSite.clean === "false" && this.context.loggedIn === true ? (
          <Link to={`/cleanSite/${selectedSite.id}`}>Mark as Cleaned!</Link>
        ) : (
          ""
        )}
        <button type="button" onClick={this.handleClickBack}>
          Back
        </button>
        <CommentList siteId={selectedSite.id} />

        <footer className="detailFoot">
          {this.context.loggedIn === false ? (
            <Link to="/signUp">Sign Up</Link>
          ) : (
            ""
          )}
        </footer>
      </div>
    );
  }
}

export default SiteDetail;
