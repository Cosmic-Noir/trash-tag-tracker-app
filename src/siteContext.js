import React from "react";

const siteContext = React.createContext({
  checkLogginStatus: () => {},
  getCleanSites: () => {},
  getTrashSites: () => {},
  loggedIn: "",
  trash_sites: [],
  clean_sites: []
});

export default siteContext;
