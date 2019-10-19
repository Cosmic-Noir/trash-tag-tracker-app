import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./nav/nav";
import Landing from "./landing/landing";
import About from "./about/about";
import SignIn from "./signIn/signIn";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/about" component={About} />
      <Route path="/signIn" component={SignIn} />
      <Route exact path="/" component={Landing} />
    </div>
  );
}

export default App;
