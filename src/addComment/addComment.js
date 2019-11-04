import React, { Component } from "react";
import config from "../config";
import TokenService from "../auth/token-service";
import "./addComment.css";

class AddComment extends Component {
  state = {
    error: null,
    site_id: "",
    content: ""
  };

  // Methods to update state
  updateContent = content => {
    this.setState({ content: content });
  };

  resetContent = () => {
    this.setState({ content: "" });
  };

  postComment = () => {
    const url = config.API_ENDPOINT + "comments";

    const newComment = {
      site_id: this.state.site_id,
      content: this.state.content
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          throw error;
        });
      }
      return res.json();
    });
  };

  // Method to send newComment to App state.comments
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.content.length === 0) {
      this.setState({ error: "Please provide content" });
    } else {
      this.resetContent();
      // Display
      const element = document.getElementById("addComment");
      element.classList.add("hidden");
      const addButton = document.getElementById("add");
      addButton.classList.remove("hidden");
      this.postComment();
    }
  };

  // Methods for buttons

  handleCancel = () => {
    const element = document.getElementById("addComment");
    element.classList.add("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.remove("hidden");
    this.resetContent();
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
          {this.state.error !== null ? (
            <h4 className="error">{this.state.error}</h4>
          ) : (
            ""
          )}
          <textarea
            name="content"
            id="content"
            ref={this.content}
            value={this.state.content}
            onChange={e => this.updateContent(e.target.value)}
          ></textarea>
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
