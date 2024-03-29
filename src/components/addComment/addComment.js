import React, { Component } from "react";
import config from "../../config";

/* Custom Components */
import TokenService from "../../auth/token-service";

class AddComment extends Component {
  state = {
    error: null,
    content: ""
  };

  /* Custom Methods */

  // Responsible for updating content state from user input
  updateContent = content => {
    this.setState({ content });
  };

  // Responsible for re-setting comment content to empty
  resetContent = () => {
    this.setState({ content: "" });
  };

  // Responsible for POST request with comment content from state
  postComment = () => {
    const url = config.API_ENDPOINT + "comments";

    const newComment = {
      site_id: parseInt(this.props.siteId),
      content: this.state.content
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          throw error;
        });
      }
      this.props.getComments();
      return res.json();
    });
  };

  // Responsible for validating form input and setting error state
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content.length === 0) {
      this.setState({ error: "Please provide content" });
    } else {
      this.resetContent();
      this.handleCancel();
      this.postComment();
    }
  };

  // Responsible for hiding content input
  handleCancel = () => {
    const element = document.getElementById("addComment");
    element.classList.add("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.remove("hidden");
    this.resetContent();
  };

  render() {
    return (
      <div className="addComment hidden width100" id="addComment">
        <form
          className="flex-column width100"
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          {this.state.error !== null ? (
            <h4 className="error">{this.state.error}</h4>
          ) : (
            ""
          )}
          <textarea
            className="desc"
            id="addComment"
            name="content"
            onChange={e => this.updateContent(e.target.value)}
            placeholder="Comment..."
            ref={this.content}
            value={this.state.content}
          ></textarea>
          <button className="whiteButton" type="submit">
            Add
          </button>
          <button
            className="whiteButton"
            id="cancel"
            onClick={this.handleCancel}
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default AddComment;
