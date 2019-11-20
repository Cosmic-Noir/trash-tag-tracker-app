import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./site.css";

class Site extends Component {
  render() {
    return (
      <Link to={`/sites/${this.props.id}`} className="title">
        <div className="site">
          <h2 className="title">{this.props.title}</h2>
          <h4>
            {this.props.city}, {this.props.state_abr}
          </h4>
          <div className="wide_screen">
            <img
              src={this.props.before_img}
              alt="trash site"
              id={"pic" + this.props.id}
            />
            {this.props.after_img ? (
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
