import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Custom Components
import About from "./about/about";
import AddSite from "./addSite/addSite";
import CleanSite from "./cleanSite/cleanSite";
import Dashboard from "./dashboard/dashboard";
import Landing from "./landing/landing";
import Nav from "./nav/nav";
import SignIn from "./signIn/signIn";
import SignOut from "./signOut/signOut";
import SignUp from "./signUp/signUp";
import SiteDetail from "./siteDetail/siteDetail";
import SiteList from "./siteList/siteList";
import CleanList from "./cleanList/cleanList";

// Context
import siteContext from "./siteContext";

// Seed data
import Data from "./siteData";

class App extends Component {
  state = {
    error: null,
    // Initially set to seed data - unsecure
    comments: Data.comments,
    totalScore: Data.totalScore
  };

  render() {
    const contextValue = {
      comments: this.state.comments,
      totalScore: this.state.totalScore,
      // methods
      increaseScore: this.increaseScore
    };
    return (
      <div className="App">
        <siteContext.Provider value={contextValue}>
          <Nav />
          <Route path="/about" component={About} />
          <Route path="/addSite" component={AddSite} />
          <Route path="/cleaned" component={CleanList} />
          <Route path="/cleanSite/:siteId" component={CleanSite} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signOut" component={SignOut} />
          <Route path="/signUp" component={SignUp} />
          <Route exact path="/sites" component={SiteList} />
          <Route path="/sites/:siteId" component={SiteDetail} />
          <Route exact path="/" component={Landing} />
        </siteContext.Provider>
        <footer>
          <h5>&copy; 2020.</h5>
        </footer>
      </div>
    );
  }
}

export default App;
