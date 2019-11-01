import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import "./site.css";

class Site extends Component {
  static contextType = siteContext;

  render() {
    // PROTOTYPE WORK AROUND - if img not a test img, but uploaded, then read image file
    if (typeof this.props.before_img === "object") {
      const fr = new FileReader();
      fr.onload = function() {
        document.getElementById("befImg").src = fr.result;
      };
      fr.readAsDataURL(this.props.before_img);
    }

    if (
      this.props.after_img !== null &&
      typeof this.props.after_img === "object"
    ) {
      const fr = new FileReader();
      fr.onload = function() {
        document.getElementById("afterImg").src = fr.result;
      };
      fr.readAsDataURL(this.props.after_img);
    }
    return (
      <siteContext.Consumer>
        {context => (
          <Link to={`/sites/${this.props.id}`} className="title">
            <div className="site">
              <h2 className="title">{this.props.title}</h2>
              <h4 className="addrss">{this.props.addrss}</h4>
              <h4>{this.props.city}</h4>
              <h4>{this.props.state_abr}</h4>
              <div className="wide_screen">
                {typeof this.props.before_img === "object" ? (
                  <img id="befImg" src=""></img>
                ) : (
                  <img src={this.props.before_img} alt="Trash site" />
                )}

                {typeof this.props.after_img === "string" &&
                this.props.after_img !== null ? (
                  <img src={this.props.after_img} alt="Clean site" />
                ) : (
                  ""
                )}
                {typeof this.props.after_img === "object" ? (
                  <img id="afterImg" src=""></img>
                ) : (
                  ""
                )}
                <p>{this.props.content}</p>
              </div>
            </div>
          </Link>
        )}
      </siteContext.Consumer>
    );
  }
}

export default Site;
