import React from "react";

const siteContext = React.createContext({
  sites: [],
  loggedIn: "",
  userInfo: [],
  onLogIn: () => {},
  onLogOut: () => {},
  setUserInfo: () => {}
});

export default siteContext;
