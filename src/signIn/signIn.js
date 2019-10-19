import React from "react";

export default function SignIn() {
  return (
    <div className="signIn">
      <h2>Sign In: </h2>
      <form>
        <label>E-mail:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
      </form>
    </div>
  );
}
