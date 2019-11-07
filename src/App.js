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
import TrashList from "./trashList/trashList";
import CleanList from "./cleanList/cleanList";

// Context
import siteContext from "./siteContext";

class App extends Component {
  state = {
    error: null,
    loggedIn: "",
    trash_sites: [],
    clean_sites: []
  };

  checkLoginStatus = () => {
    if (window.localStorage.getItem(config.TOKEN_KEY)) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  };

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

  setTrashSites = trash_sites => {
    this.setState({ trash_sites: trash_sites, error: null });
  };

  addTrashSite = trash_site => {
    this.setState({
      comments: [...this.state.trash_sites, trash_site]
    });
  };

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

  setCleanSites = clean_sites => {
    this.setState({ clean_sites: clean_sites, error: null });
  };

  removeTrashSite = site_id => {
    const newTrashSites = this.state.trash_sites.filter(
      site => site.site_id !== site_id
    );
    this.setState({ trash_sites: newTrashSites });
  };
  
  addCleanSite = clean_site => {
      this.setState({
        clean_sites: [...this.state.clean_sites, clean_site]
      });
    };
  }

  componentDidMount() {
    this.checkLoginStatus();
    this.getTrashSites();
    this.getCleanSites();
  }

  render() {
    const contextValue = {
      totalScore: this.state.totalScore,
      loggedIn: this.state.loggedIn,
      checkLoginStatus: this.checkLoginStatus,
      addTrashSite: this.addTrashSite,,
      removeTrashSite: this.removeTrashSite,
      addCleanSite: this.addCleanSite,
      trash_sites: this.state.trash_sites,
      clean_sites: this.state.clean_sites
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
          <Route exact path="/sites" component={TrashList} />
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
