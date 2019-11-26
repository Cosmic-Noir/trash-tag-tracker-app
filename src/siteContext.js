import React from "react";

const siteContext = React.createContext({
  // Methods
  checkLogginStatus: () => {},
  getCleanSites: () => {},
  getTrashSites: () => {},
  // Values
  clean_sites: [],
  loggedIn: "",
  totalScore: "",
  totaleSitesCleaned: "",
  trash_sites: []
});

export default siteContext;
