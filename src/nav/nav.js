import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/sites">Trash Sites</Link>
      <Link to="/signIn">Sign In</Link>
    </div>
  );
}
