import React from "react";

const siteContext = React.createContext({
  checkLogginStatus: () => {},
  addTrashSite: () => {},
  getCleanSites: () => {},
  getTrashSites: () => {},
  loggedIn: "",
  trash_sites: [],
  clean_sites: []
});

export default siteContext;
