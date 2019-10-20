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
import CleanSite from "./cleanSite/cleanSite";
import SignOut from "./signOut/signOut";

// Context
import siteContext from "./siteContext";

// Seed data
import Sites from "./siteData";

class App extends Component {
  state = {
    // Initially set to seed data - unsecure
    sites: Sites,
    loggedIn: false,
    userInfo: [],
    users: Sites.users
  };

  // Temp function to add new user data to state
  addNewUser = newUser => {
    this.setState({
      users: [...this.state.users, newUser]
    });
    console.log(`New user added: ${this.state.users}`);
  };

  onLogIn = () => {
    this.setState({
      loggedIn: true
    });
  };

  onLogOut = () => {
    this.setState({
      loggedIn: false,
      userInfo: []
    });
    console.log(`User has logged out, set state to false`);
  };

  setUserInfo = user => {
    this.setState({ userInfo: user });
    console.log(`User info set as: ${user}`);
  };

  updateSite = cleanedSite => {
    this.setState({
      sites: this.state.sites.map(site =>
        site.id !== cleanedSite.id ? site : cleanedSite
      )
    });
  };

  render() {
    // console.log(`App rendering...`);
    const contextValue = {
      // state
      sites: this.state.sites,
      loggedIn: this.state.loggedIn,
      userInfo: this.state.userInfo,
      users: this.state.users,
      // methods
      onLogIn: this.onLogIn,
      onLogOut: this.onLogOut,
      setUserInfo: this.setUserInfo,
      addNewUser: this.addNewUser,
      updateSite: this.updateSite
    };
    return (
      <div className="App">
        <siteContext.Provider value={contextValue}>
          <Nav />
          <Route path="/about" component={About} />
          <Route path="/signIn" component={SignIn} />
          <Route exact path="/sites" component={SiteList} />
          <Route path="/sites/:siteId" component={SiteDetail} />
          <Route path="/cleanSite/:siteId" component={CleanSite} />
          <Route path="/signOut" component={SignOut} />
          <Route exact path="/" component={Landing} />
        </siteContext.Provider>
      </div>
    );
  }
}

export default App;
