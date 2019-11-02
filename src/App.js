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

  // Set state from returned data:
  // setSites = response => {
  //   this.setState({ sites: response });
  // };

  // Fetch all sites:
  // getAllSites = () => {
  //   const url = config.API_ENDPOINT + "sites";
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "applicatin/json"
  //     }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error(res.status);
  //       }
  //       return res.json();
  //     })
  //     .then(this.setSites)
  //     .catch(error => this.setState({ error }));
  // };

  // Temp function to add new user data to state

  addNewComment = newComment => {
    this.setState({
      comments: [...this.state.comments, newComment]
    });
  };

  updateSite = cleanedSite => {
    this.setState({
      sites: this.state.sites.map(site =>
        site.id !== cleanedSite.id ? site : cleanedSite
      )
    });
  };

  // componentDidMount() {
  //   this.getAllSites();
  // }

  render() {
    // console.log(`App rendering...`);
    const contextValue = {
      // state

      loggedIn: this.state.loggedIn,
      userInfo: this.state.userInfo,
      users: this.state.users,
      comments: this.state.comments,
      totalScore: this.state.totalScore,
      // methods
      updateSite: this.updateSite,
      addNewComment: this.addNewComment,
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
