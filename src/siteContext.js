import React from "react";

const siteContext = React.createContext({
  sites: [],
  loggedIn: "",
  userInfo: [],
  users: [],
  onLogIn: () => {},
  onLogOut: () => {},
  setUserInfo: () => {}
});

export default siteContext;
