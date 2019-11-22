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
    this.setState({ dated: this.state.site.date_posted.slice(0, 10) });
  };

  componentDidMount() {
    this.getSelectSite();
  }

  render() {
    return (
      <div className="flex-column">
        <div className="siteDetail">
          <img
            src={this.state.site.before_img}
            className="detailImg"
            alt="Before"
          />
          <section className="details">
            <h2>{this.state.site.title}</h2>
            <h4 className="addrss">{this.state.site.addrss}</h4>
            <h4>
              {this.state.site.city}, {this.state.site.state_abr}
            </h4>
            <br />
            <h5>Date Posted: {this.state.dated}</h5>
            <h5>Posted By: {this.state.site.username} </h5>
            <p>{this.state.site.content}</p>
          </section>
        </div>
        <section className="comments">
          {this.state.site.clean === false &&
          TokenService.hasAuthToken() === true ? (
            <Link
              to={`/cleanSite/${this.state.site.id}`}
              className="whiteButton"
            >
              Mark as Cleaned!
            </Link>
          ) : (
            ""
          )}
          <button
            className="whiteButton"
            onClick={this.handleClickBack}
            type="button"
          >
            Back
          </button>
          <CommentList siteId={this.props.match.params.siteId} />
        </section>
      </div>
    );
  }
}

export default SiteDetail;
