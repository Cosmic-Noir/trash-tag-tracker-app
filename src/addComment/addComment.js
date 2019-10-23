import React, { Component } from "react";
import siteContext from "../siteContext";
import "./addComment.css";

class AddComment extends Component {
  state = {};

  static contextType = siteContext;

  handleCancel = () => {
    const element = document.getElementById("addComment");
    element.classList.add("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.remove("hidden");
  };

  render() {
    return (
      <div className="addComment hidden" id="addComment">
        <h3>Add comment:</h3>

        <button type="button" id="cancel" onClick={this.handleCancel}>
          Cancel
        </button>
      </div>
    );
  }
}

export default AddComment;
