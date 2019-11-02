import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import "./site.css";

class Site extends Component {
  static contextType = siteContext;

  readImgFile = () => {
    const fr = new FileReader();
    fr.onload = function() {
      document.getElementById("pic" + this.props.id).src = fr.result;
    };
    fr.readAsDataURL(this.props.before_img);
  };

  componentDidMount() {
    // this.readImgFile();
  }

  render() {
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
                <img
                  src={this.props.before_img}
                  alt="trash site"
                  id={"pic" + this.props.id}
                />
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
