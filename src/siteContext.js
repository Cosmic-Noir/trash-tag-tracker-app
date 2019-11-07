import React from "react";

const siteContext = React.createContext({
  increaseScore: () => {},
  checkLogginStatus: () => {},
  addTrashSite: () => {},
  loggedIn: "",
  trash_sites: [],
  clean_sites: []
});

export default siteContext;
