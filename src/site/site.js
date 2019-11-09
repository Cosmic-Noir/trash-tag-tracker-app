import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import "./site.css";

class Site extends Component {
  static contextType = siteContext;

  parseISOStrings = s => {
    const b = s.split(/\D+/);
    const date = new Date(
      Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])
    ).toString();
    return date;
  };

  createDate = date => {
    if (this.props.date_posted) {
      return date.slice(0, 10);
    }
  };

  render() {
    console.log(this.props.date_posted);
    return (
      <Link to={`/sites/${this.props.id}`} className="title">
        <div className="site">
          <h2 className="title">{this.props.title}</h2>
          <h4>Date Posted: {this.createDate(this.props.date_posted)}</h4>
          <h4 className="addrss">{this.props.addrss}</h4>
          <h4>{this.props.city}</h4>
          <h4>{this.props.state_abr}</h4>
          <div className="wide_screen">
            {typeof this.props.before_img === "string" ? (
              <img
                src={this.props.before_img}
                alt="trash site"
                id={"pic" + this.props.id}
              />
            ) : (
              ""
            )}
            {this.props.after_img !== "" &&
            typeof this.props.after_img === "string" ? (
              <img src={this.props.after_img} alt="Clean site" />
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
