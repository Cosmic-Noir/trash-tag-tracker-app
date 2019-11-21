import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./site.css";

class Site extends Component {
  render() {
    return (
      <Link to={`/sites/${this.props.id}`} className="title">
        <div className="site">
          <div className="siteContent">
            <h2 className="title">{this.props.title}</h2>
            <h4>
              {this.props.city}, {this.props.state_abr}
            </h4>
            <p className="content">{this.props.content}</p>
          </div>
          <img
            alt="trash site"
            // className="siteImg"
            className={
              this.props.clean === false ? "trashSiteImg" : "cleanSiteImg"
            }
            id={"pic" + this.props.id}
            src={this.props.before_img}
          />
          {this.props.after_img ? (
            <img
              alt="Clean site"
              className={
                this.props.clean === false ? "trashSiteImg" : "cleanSiteImg"
              }
              src={this.props.after_img}
            />
          ) : (
            ""
          )}
        </div>
      </Link>
    );
  }
}

export default Site;
