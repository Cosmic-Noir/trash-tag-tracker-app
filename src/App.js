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

// Context
import siteContext from "./siteContext";

// Seed data
import Data from "./siteData";

class App extends Component {
  state = {
    // Initially set to seed data - unsecure
    sites: Data.sites,
    loggedIn: false, // set to true for testing
    userInfo: [],
    users: Data.users,
    comments: Data.comments,
    totalScore: Data.totalScore
  };

  // Temp function to add new user data to state
  addNewUser = newUser => {
    this.setState({
      users: [...this.state.users, newUser]
    });
    // console.log(`New user added: ${this.state.users}`);
  };

  addNewSite = newSite => {
    this.setState({
      sites: [...this.state.sites, newSite]
    });
  };

  addNewComment = newComment => {
    this.setState({
      comments: [...this.state.comments, newComment]
    });
  };

  increaseScore = addScore => {
    const currentScore = this.state.userInfo.score;
    const updatedUser = this.state.userInfo;
    const newScore = addScore + currentScore;
    updatedUser.score = newScore;

    const newTotal = this.state.totalScore + addScore;
    this.setState({ totalScore: newTotal });
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
    // console.log(`User has logged out, set state to false`);
  };

  setUserInfo = user => {
    this.setState({ userInfo: user });
    // console.log(`User info set as: ${user}`);
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
      comments: this.state.comments,
      totalScore: this.state.totalScore,
      // methods
      onLogIn: this.onLogIn,
      onLogOut: this.onLogOut,
      setUserInfo: this.setUserInfo,
      addNewUser: this.addNewUser,
      updateSite: this.updateSite,
      addNewSite: this.addNewSite,
      addNewComment: this.addNewComment,
      increaseScore: this.increaseScore
    };
    return (
      <div className="App">
        <siteContext.Provider value={contextValue}>
          <Nav />
          <Route path="/about" component={About} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route exact path="/sites" component={SiteList} />
          <Route path="/sites/:siteId" component={SiteDetail} />
          <Route path="/addSite" component={AddSite} />
          <Route path="/cleanSite/:siteId" component={CleanSite} />
          <Route path="/signOut" component={SignOut} />
          <Route path="/dashboard" component={Dashboard} />
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
