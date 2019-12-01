import React from "react";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="flex-column" data-aos="fade-in" data-aos-duration="1000">
      <h2 className="title">Thank you for using our demo</h2>
      <h3 className="subtitle">
        Please consider signing up today to make a difference!
      </h3>
      <Link className="whiteButton" to="signUp">
        Sign Up
      </Link>
    </div>
  );
}
