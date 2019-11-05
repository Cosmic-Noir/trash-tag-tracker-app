import React, { Component } from "react";
import siteContext from "../siteContext";
import Comment from "../comment/comment";
import config from "../config";
import AddComment from "../addComment/addComment";
import TokenService from "../auth/token-service";
import "./commentList.css";

class CommentList extends Component {
  state = {
    error: "",
    comments: null
  };

  static contextType = siteContext;

  clickAddComment() {
    const element = document.getElementById("addComment");
    element.classList.remove("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.add("hidden");
  }

  getComments = () => {
    const url = `${config.API_ENDPOINT}sites/${this.props.siteId}/comments`;

    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setComments)
      .catch(error => this.setState({ error }));
  };

  setComments = comments => {
    this.setState({ comments: comments, error: null });
  };

  displayComments = () => {
    const comments = this.state.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          id={comment.id}
          username={comment.username}
          content={comment.content}
        />
      );
    });
    return comments;
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <div className="comments">
        {this.context.loggedIn === false ? (
          <h5>Comments: (Log in to comment!)</h5>
        ) : (
          <div>
            <h5>Comments:</h5>
            {TokenService.hasAuthToken() === true ? (
              <button type="button" id="add" onClick={this.clickAddComment}>
                Add Comment
              </button>
            ) : (
              <h6>Sign in to comment</h6>
            )}
            <AddComment siteId={this.props.siteId} />
          </div>
        )}
        <ul>
          {this.state.error === null ? (
            this.displayComments()
          ) : (
            <p>{this.state.error}</p>
          )}
        </ul>
        <p></p>
      </div>
    );
  }
}

export default CommentList;
