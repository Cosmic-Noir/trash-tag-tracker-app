import React from "react";

const siteContext = React.createContext({
  sites: [],
  loggedIn: "",
  userInfo: []
});

export default siteContext;
