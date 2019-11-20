import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
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
      .then(this.createDate)
      .catch(error => this.setState({ error }));
  };

  setSite = site => {
    this.setState({ site: site });
  };

  createDate = () => {
    const date = this.state.site.date_posted.slice(0, 10);
    this.setState({ dated: date });
  };

  componentDidMount() {
    this.getSelectSite();
  }

  render() {
    return (
      <div className="siteDetail">
        <img
          src={this.state.site.before_img}
          className="siteImg"
          alt="Before"
        />
        <section className="details">
          <h2>{this.state.site.title}</h2>
          <h4 className="addrss">{this.state.site.addrss}</h4>
          <h4>
            {this.state.site.city}, {this.state.site.state_abr}
          </h4>
          <h4>Date Posted: {this.state.dated}</h4>
          <h4>Posted By: {this.state.site.username} </h4>
        </section>

        {/* <Site
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
          username={this.state.site.username}
        /> */}
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
