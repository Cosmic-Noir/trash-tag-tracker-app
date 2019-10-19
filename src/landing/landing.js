import React from "react";
import SignUp from "../signUp/signUp";
import "./landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <h1>Welcome to TrashTag Tracker!</h1>
      <p>
        Have you ever wanted to participate in the TrashTag challenge but felt
        unsure as to where to start?
      </p>
      <br />
      <p>
        Now you have the perfect place to start. Browse reported trash sites by
        other users, post new trash sites, and mark them as cleaned up! Make a
        real impact by joining forces with hundreds of others to transform our
        planet into a cleaner and more habitable place, one site at a time.
      </p>

      <SignUp />
    </div>
  );
}
