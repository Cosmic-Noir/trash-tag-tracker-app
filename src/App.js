import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import config from "./config";

// Custom Components
import About from "./components/about/about";
import AddSite from "./components/addSite/addSite";
import CleanSite from "./components/cleanSite/cleanSite";
import Dashboard from "./components/dashboard/dashboard";
import Landing from "./components/landing/landing";
import Nav from "./components/nav/nav";
import SignIn from "./components/signIn/signIn";
import SignOut from "./components/signOut/signOut";
import SignUp from "./components/signUp/signUp";
import SiteDetail from "./components/siteDetail/siteDetail";
import TrashList from "./components/trashList/trashList";
import CleanList from "./components/cleanList/cleanList";

// Styling & Images
import "./App.css";

// Context
import siteContext from "./siteContext";

class App extends Component {
  state = {
    error: null,
    loggedIn: "",
    trash_sites: [],
    clean_sites: []
  };

  // Custom Functions

  // Responsible for setting user's loggedIn status to true or false if JWT present
  checkLoginStatus = () => {
    if (window.localStorage.getItem(config.TOKEN_KEY)) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  };

  // Responsible for GET request for trash sites
  getTrashSites = () => {
    const url = config.API_ENDPOINT + "sites/trash";
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "applicatin/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setTrashSites)
      .catch(error => this.setState({ error }));
  };

  // Responsible for setting trash_sites state to received trash site results
  setTrashSites = trash_sites => {
    this.setState({ trash_sites: trash_sites, error: null });
  };

  // Responsible for GET request for clean sites
  getCleanSites = () => {
    const url = config.API_ENDPOINT + "sites/clean";
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "applicatin/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setCleanSites)
      .catch(error => this.setState({ error }));
  };

  // Responsible for setting clean_sites state to received clean site results
  setCleanSites = clean_sites => {
    this.setState({ clean_sites: clean_sites, error: null });
  };

  componentDidMount() {
    this.checkLoginStatus();
    this.getTrashSites();
    this.getCleanSites();
  }

  render() {
    const contextValue = {
      loggedIn: this.state.loggedIn,
      checkLoginStatus: this.checkLoginStatus,
      getCleanSites: this.getCleanSites,
      getTrashSites: this.getTrashSites,
      trash_sites: this.state.trash_sites,
      clean_sites: this.state.clean_sites
    };
    return (
      <div className="App">
        <siteContext.Provider value={contextValue}>
          <nav>
            <Nav />
          </nav>
          <main>
            <Route path="/about" component={About} />
            <Route path="/addSite" component={AddSite} />
            <Route path="/cleaned" component={CleanList} />
            <Route path="/cleanSite/:siteId" component={CleanSite} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signOut" component={SignOut} />
            <Route path="/signUp" component={SignUp} />
            <Route exact path="/sites" component={TrashList} />
            <Route path="/sites/:siteId" component={SiteDetail} />
            <Route exact path="/" component={Landing} />
          </main>
        </siteContext.Provider>
        <footer className="dark">
          {this.state.loggedIn === false ? (
            <Link to="/signUp" id="footerSignUp">
              Sign Up
            </Link>
          ) : (
            ""
          )}
          <h5>&copy; 2020.</h5>
        </footer>
      </div>
    );
  }
}

export default App;
