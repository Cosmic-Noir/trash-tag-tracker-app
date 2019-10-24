import React from "react";

const siteContext = React.createContext({
  sites: [],
  loggedIn: "",
  userInfo: [],
  users: [],
  comments: [],
  onLogIn: () => {},
  onLogOut: () => {},
  setUserInfo: () => {},
  addNewUser: () => {},
  updateSite: () => {},
  addNewSite: () => {},
  addNewComment: () => {},
  increaseScore: () => {}
});

export default siteContext;
