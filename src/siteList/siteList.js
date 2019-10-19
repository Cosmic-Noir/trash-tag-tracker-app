import React, { Component } from "react";
import Site from "../site/site";
import Sites from "../siteData";

export default class SiteList extends Component {
  state = {
    sites: Sites
  };
  render() {
    console.log(this.state.sites);
    return (
      <div>
        <h2>Trash Sites:</h2>
      </div>
    );
  }
}
