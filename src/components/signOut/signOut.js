import React, { Component } from "react";

// Should turn into function when can test
class SignOut extends Component {
  render() {
    return (
      <div
        className="flex-column signOut"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h2 className="title">You have signed out!</h2>
      </div>
    );
  }
}

export default SignOut;
