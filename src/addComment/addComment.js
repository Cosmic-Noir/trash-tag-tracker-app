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
  updateContent = content => {
    this.setState({ content: content });
  };

  // Method to send newComment to App state.comments
  handleSubmit = e => {
    e.preventDefault();

    let newComment = this.state;

    console.log("form pressed");
  };

  // Methods for buttons

  handleCancel = () => {
    const element = document.getElementById("addComment");
    element.classList.add("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.remove("hidden");
  };

  // Lifecycle methods

  componentDidMount() {
    // Set initial state with user data
    let newId = Math.floor(Math.random() * 1000);

    this.setState({
      userRef: this.context.userInfo.username,
      siteId: this.props.siteId,
      id: newId
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
          <textarea
            name="content"
            id="content"
            ref={this.content}
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
