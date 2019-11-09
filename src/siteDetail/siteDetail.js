import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import Site from "../site/site";
import CommentList from "../commentList/commentList";
import config from "../config";
import TokenService from "../auth/token-service";
import "./siteDetail.css";

class SiteDetail extends Component {
  state = {
    site: "",
    error: ""
  };

  static contextType = siteContext;

  handleClickBack = () => {
    this.props.history.goBack();
  };

  getSelectSite = () => {
    const url = config.API_ENDPOINT + "sites/" + this.props.match.params.siteId;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "applicatin/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setSite)
      .catch(error => this.setState({ error }));
  };

  setSite = site => {
    this.setState({ site: site });
  };

  componentDidMount() {
    this.getSelectSite();
  }

  render() {
    return (
      <div className="siteDetail">
        <Site
          key={this.state.site.id}
          id={this.state.site.id}
          title={this.state.site.title}
          city={this.state.site.city}
          addrss={this.state.site.addrss}
          state_abr={this.state.site.state_abr}
          content={this.state.site.content}
          before_img={this.state.site.before_img}
          after_img={this.state.site.after_img}
          date_posted={this.state.site.date_posted}
        />
        {this.state.site.clean === false &&
        TokenService.hasAuthToken() === true ? (
          <Link to={`/cleanSite/${this.state.site.id}`}>Mark as Cleaned!</Link>
        ) : (
          ""
        )}
        <button type="button" onClick={this.handleClickBack}>
          Back
        </button>
        <CommentList siteId={this.props.match.params.siteId} />

        <footer className="detailFoot">
          {TokenService.hasAuthToken() === false ? (
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
