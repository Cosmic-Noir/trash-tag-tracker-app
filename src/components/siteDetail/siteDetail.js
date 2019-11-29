import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../config";

/* Custom Components */
import CommentList from "../commentList/commentList";
import TokenService from "../../auth/token-service";

/* Styling & Images */
import "./siteDetail.css";

/* Context */
import siteContext from "../../siteContext";

class SiteDetail extends Component {
  state = {
    error: "",
    site: ""
  };

  static contextType = siteContext;

  /* Custom Methods */

  // Responsible for when user clicks cancel button
  handleClickBack = () => {
    this.props.history.goBack();
  };

  // Responsible for GET request of user selected site by ID
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

  // Responsible for setting site state to site received in GET res
  setSite = site => {
    this.setState({ site: site });
  };

  // Responsbitle for creating readable time stamp for display
  createDate = () => {
    this.setState({ dated: this.state.site.date_posted.slice(0, 10) });
  };

  componentDidMount() {
    this.getSelectSite();
  }

  render() {
    return (
      <div className="flex-column" data-aos="fade-in" data-aos-duration="1000">
        <section className="flex-column itemBorder detailTile">
          <div className="siteDetail">
            <section className="flex-column">
              <img
                alt="Before site"
                className={
                  this.state.site.clean === false
                    ? "detailImg"
                    : "cleanDetailImg"
                }
                src={this.state.site.before_img}
              />
              {this.state.site.clean === true ? (
                <img
                  alt="Clean site"
                  className="cleanDetailImg"
                  src={this.state.site.after_img}
                />
              ) : (
                ""
              )}
            </section>
            <section className="details" role="contentinfo">
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
          {this.state.site.clean === false &&
          TokenService.hasAuthToken() === true ? (
            <Link
              className="whiteButton"
              to={`/cleanSite/${this.state.site.id}`}
            >
              Mark as Cleaned!
            </Link>
          ) : (
            ""
          )}
          {this.state.site.clean === false &&
          TokenService.hasAuthToken() === false ? (
            <Link className="whiteButton" to="/signIn">
              Sign in to Mark as Cleaned
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
        </section>

        <CommentList siteId={this.props.match.params.siteId} />
      </div>
    );
  }
}

export default SiteDetail;
