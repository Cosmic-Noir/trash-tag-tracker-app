import React, { Component } from "react";
import siteContext from "../siteContext";
import "./addComment.css";

class AddComment extends Component {
  state = {
    id: "",
    siteId: "",
    userRef: "",
    content: ""
  };

  static contextType = siteContext;

  // Methods to update state
  updateId = () => {
    let newId = Math.floor(Math.random() * 1000);
    this.setState({ id: newId });
  };

  updateUserRef = userRef => {
    this.setState({ userRef: userRef });
  };

  updateContent = content => {
    this.setState({ content: content });
  };

  // Method to send newComment to App state.comments
  handleSubmit = e => {
    e.preventDefault();
    console.log("form pressed");
  };

  // Methods for buttons

  handleCancel = () => {
    const element = document.getElementById("addComment");
    element.classList.add("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.remove("hidden");
  };

  render() {
    return (
      <div className="addComment hidden" id="addComment">
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <label htmlFor="content">Add comment:</label>
          <textarea></textarea>
          <button type="submit">Add</button>
        </form>

        <button type="button" id="cancel" onClick={this.handleCancel}>
          Cancel
        </button>
      </div>
    );
  }
}

export default AddComment;
