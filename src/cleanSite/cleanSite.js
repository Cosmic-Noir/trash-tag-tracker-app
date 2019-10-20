import React, { Component } from "react";
import siteContext from "./siteContext";

class CleanSite extends Component {
  static contextType = siteContext;

  state = {
    error: null,
    id: "",
    title: "",
    description: "",
    afterImg: ""
  };

  render() {
    return (
      <div className="clean">
        <h2>Mark A Trash Site As Cleaned:</h2>
        <form></form>
      </div>
    );
  }
}

export default CleanSites;
