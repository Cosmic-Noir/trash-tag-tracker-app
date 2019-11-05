import React, { Component } from "react";
import { Route } from "react-router-dom";
import config from "./config";
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

class App extends Component {
  state = {
    error: null,
    loggedIn: ""
  };

  checkLoginStatus = () => {
    if (window.localStorage.getItem(config.TOKEN_KEY)) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    const contextValue = {
      totalScore: this.state.totalScore,
      loggedIn: this.state.loggedIn,
      checkLoginStatus: this.checkLoginStatus
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
