import React from "react";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="flex-column">
      <h2 className="title">
        Thank you for using our demo, please consider signing up today to make a
        difference!
      </h2>
      <Link className="whiteButton" to="signUp">
        Sign Up
      </Link>
    </div>
  );
}
