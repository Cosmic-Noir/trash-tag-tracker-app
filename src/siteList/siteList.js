import React, { Component } from "react";
import siteContext from "../siteContext";
import { Link } from "react-router-dom";
import Site from "../site/site";
import config from "../config";
import "./siteList.css";

class SiteList extends Component {
  state = {
    state_abr: ""
  };

  static contextType = siteContext;

  updateState = state_abr => {
    this.setState({ state_abr: state_abr });
  };

  componentDidMount() {}

  render() {
    const sites = this.context.sites.map(site => {
      return (
        <Site
          key={site.id}
          id={site.id}
          title={site.title}
          before_img={site.before_img}
          city={site.city}
          state_abr={site.state_abr}
        />
      );
    });
    console.log(this.context.sites);
    // // Create array of all states there are sites for
    // const stateOptions = this.context.sites.map(site => {
    //   if (site.clean === "false") {
    //     return site.state_abr;
    //   }
    // });
    // // Filter to create unique lists
    // let filterOptions = [...new Set(stateOptions)];
    // // Creat options out of filtered array
    // const options = filterOptions.map(state => {
    //   return (
    //     <option value={state} key={state}>
    //       {state}
    //     </option>
    //   );
    // });

    return (
      <div className="siteList">
        <h2>Trash Sites:</h2>
        {this.context.loggedIn === true ? (
          <Link to="/addSite">Add New Trash Site</Link>
        ) : (
          <h5>Log in to add a new site</h5>
        )}
        <form className="siteList">
          <select
            className="center"
            name="state_abr"
            id="state_abr"
            value={this.state.state_abr}
            ref={this.state.state_abr}
            onChange={e => this.updateState(e.target.value)}
          >
            <option value="">All</option>
            {/* {options} */}
          </select>
        </form>
        <ul className="siteList" id="siteList">
          {sites}
        </ul>
        <footer>
          {this.context.loggedIn === false ? (
            <Link to="/signUp">Sign Up</Link>
          ) : (
            ""
          )}
        </footer>
      </div>
    );
  }
}

export default SiteList;
