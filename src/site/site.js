import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./site.css";

class Site extends Component {
  createDate = date => {
    if (this.props.date_posted) {
      return date.slice(0, 10);
    }
  };

  render() {
    return (
      <Link to={`/sites/${this.props.id}`} className="title">
        <div className="site">
          <h2 className="title">{this.props.title}</h2>
          {this.props.username ? <h4>Posted by: {this.props.username}</h4> : ""}
          {this.props.date_posted ? (
            <h4>Date Posted: {this.createDate(this.props.date_posted)}</h4>
          ) : (
            ""
          )}
          <h4 className="addrss">{this.props.addrss}</h4>
          <h4>{this.props.city}</h4>
          <h4>{this.props.state_abr}</h4>
          <div className="wide_screen">
            {typeof this.props.before_img === "string" ? (
              <img
                src={this.props.before_img}
                alt="trash site"
                className="siteImg"
                id={"pic" + this.props.id}
              />
            ) : (
              ""
            )}
            {this.props.after_img !== "" &&
            typeof this.props.after_img === "string" ? (
              <img
                src={this.props.after_img}
                alt="Clean site"
                className="siteImg"
              />
            ) : (
              ""
            )}
            <p>{this.props.content}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Site;
