import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import Site from "../site/site";
import Comment from "../comment/comment";
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

    const comments = this.context.comments.map(comment => {
      const numberProp = parseInt(this.props.match.params.siteId);
      if (comment.siteId === numberProp) {
        console.log(`${comment.siteId} and ${numberProp}`);
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            userRef={comment.userRef}
            content={comment.content}
          />
        );
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
        <div className="detail">
          <p className="desc">{selectedSite.description}</p>
          <button type="button" onClick={this.handleClickBack}>
            Back
          </button>
        </div>
        <div className="">
          <h3>Comments:</h3>
          <ul className="comments"></ul>
          {comments ? comments : <h5>No comments</h5>}
        </div>
        <footer className="detailFoot">
          {selectedSite.clean === "false" && this.context.loggedIn === true ? (
            <Link to={`/cleanSite/${selectedSite.id}`}>Mark as Cleaned!</Link>
          ) : (
            ""
          )}

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
