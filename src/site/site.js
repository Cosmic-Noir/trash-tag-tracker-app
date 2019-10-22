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
          <div className="site">
            <Link to={`/sites/${this.props.id}`} className="title">
              {this.props.title}
            </Link>

            <h3>{this.props.stateAbr}</h3>
            <img src={this.props.beforeImg} alt="Trash site" />
            {this.props.afterImg !== "" ? (
              <img src={this.props.afterImg} alt="Clean site" />
            ) : (
              ""
            )}
          </div>
        )}
      </siteContext.Consumer>
    );
  }
}

export default Site;
