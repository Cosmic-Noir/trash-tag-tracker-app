import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import "./site.css";

class Site extends Component {
  static contextType = siteContext;

  render() {
    return (
      <siteContext.Consumer>
        {context => (
          <Link to={`/sites/${this.props.id}`}>
            <div className="site">
              <h2>{this.props.title}</h2>
              <h3>{this.props.state}</h3>
              <img src={this.props.imgSrc} alt="Trash site" />
            </div>
          </Link>
        )}
      </siteContext.Consumer>
    );
  }
}

export default Site;
