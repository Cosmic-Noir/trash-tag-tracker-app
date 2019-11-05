import React from "react";

const siteContext = React.createContext({
  increaseScore: () => {},
  checkLogginStatus: () => {},
  loggedIn: ""
});

export default siteContext;
