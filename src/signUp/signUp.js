import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signUp">
      <form>
        <label>First name:</label>
        <input type="text"></input>
        <label>Last name:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="email"></input>
        <label>Password:</label>
        <input type="password"></input>
        <button type="submit">Submit</button>
      </form>
      <Link to="/signIn">Sign In</Link>
    </div>
  );
}
