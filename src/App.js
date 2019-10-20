import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

// Custom Components
import Nav from "./nav/nav";
import Landing from "./landing/landing";
import About from "./about/about";
import SignIn from "./signIn/signIn";
import SiteList from "./siteList/siteList";
import SiteDetail from "./siteDetail/siteDetail";
import CleanSites from "./cleanSites/cleanSites";

// Context
import siteContext from "./siteContext";

// Seed data
import Sites from "./siteData";

class App extends Component {
  state = {
    // Initially set to seed data
    sites: Sites,
    loggedIn: false,
    userInfo: ""
  };

  render() {
    // console.log(`App rendering...`);
    const contextValue = {
      sites: this.state.sites
    };
    return (
      <div className="App">
        <siteContext.Provider value={contextValue}>
          <Nav />
          <Route path="/about" component={About} />
          <Route path="/signIn" component={SignIn} />
          <Route exact path="/sites" component={SiteList} />
          <Route path="/sites/:siteId" component={SiteDetail} />
          <Route path="/clean" component={CleanSites} />
          <Route exact path="/" component={Landing} />
        </siteContext.Provider>
      </div>
    );
  }
}

export default App;
