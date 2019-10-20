import React from "react";

const siteContext = React.createContext({
  sites: [],
  loggedIn: "",
  userInfo: [],
  onLogIn: () => {},
  setUserInfo: () => {}
});

export default siteContext;
