import { Link } from "react-router-dom";
import React, { Component } from "react";

/* Styling & Images */
import "./site.css";

// Consider turning into Function instead when can test
class Site extends Component {
  render() {
    return (
      <Link to={`/sites/${this.props.id}`}>
        <div
          className={this.props.clean === false ? "trash tile" : "clean tile"}
        >
          <div className="siteContent">
            <h2 className="title">{this.props.title}</h2>
            <h4>
              {this.props.city}, {this.props.state_abr}
            </h4>
            <p className="content">{this.props.content}</p>
          </div>
          <div className="imgContainer">
            <img
              alt="trash"
              className={
                this.props.clean === false ? "trashSiteImg" : "cleanSiteImg"
              }
              id={"pic" + this.props.id}
              src={this.props.before_img}
            />
            {this.props.after_img ? (
              <img
                alt="Clean"
                className={
                  this.props.clean === false ? "trashSiteImg" : "cleanSiteImg"
                }
                src={this.props.after_img}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    );
  }
}

export default Site;
