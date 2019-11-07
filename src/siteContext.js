import React from "react";

const siteContext = React.createContext({
  increaseScore: () => {},
  checkLogginStatus: () => {},
  loggedIn: "",
  trash_sites: [],
  clean_sites: []
});

export default siteContext;
