import React, { Component } from "react";
import siteContext from "../siteContext";
import "./addComment.css";

class AddComment extends Component {
  state = {
    error: null,
    id: "",
    siteId: "",
    userRef: "",
    content: ""
  };

  static contextType = siteContext;

  // Methods to update state
  updateContent = content => {
    this.setState({ content: content });
  };

  resetContent = () => {
    this.setState({ content: "" });
  };

  updateId = () => {
    let newId = Math.floor(Math.random() * 1000);
    this.setState({ id: newId });
  };

  // Method to send newComment to App state.comments
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.content.length === 0) {
      this.setState({ error: "Please provide content" });
    } else {
      let newComment = this.state;
      this.context.addNewComment(newComment);
      this.updateId();
    }
    this.resetContent();
    const element = document.getElementById("addComment");
    element.classList.add("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.remove("hidden");
  };

  // Methods for buttons

  handleCancel = () => {
    const element = document.getElementById("addComment");
    element.classList.add("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.remove("hidden");
    this.resetContent();
  };

  // Lifecycle methods

  componentDidMount() {
    // Set initial state with user data
    this.updateId();
    this.setState({
      userRef: this.context.userInfo.username,
      siteId: this.props.siteId
    });
  }

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