import React, { Component } from "react";
import config from "../../config";
import { Link } from "react-router-dom";

/* Custom Components */
import AddComment from "../addComment/addComment";
import Comment from "../comment/comment";
import TokenService from "../../auth/token-service";

/* Styling & Images */
import "./commentList.css";

/* Context */
import siteContext from "../../siteContext";

class CommentList extends Component {
  state = {
    error: "",
    comments: null
  };

  static contextType = siteContext;

  /* State Setting Methods */

  setComments = comments => {
    this.setState({ comments: comments, error: null });
  };

  /* Custom Methods */

  // Responsible for displaying comment input element and add button
  clickAddComment = () => {
    const element = document.getElementById("addComment");
    element.classList.remove("hidden");
    const addButton = document.getElementById("add");
    addButton.classList.add("hidden");
  };

  // Responsible for GET request for all comments with matching siteID
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

  // Responsible for taking comments state and returning array of Comment components OR 'No comments yet!'
  displayComments = () => {
    const comments = this.state.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          id={comment.id}
          username={comment.username}
          content={comment.content}
          date_posted={comment.date_posted}
        />
      );
    });
    if (comments.length === 0) {
      return <li id="noComment">No comments yet!</li>;
    } else {
      return comments;
    }
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <div className="comments width100">
        {this.context.loggedIn === false ? (
          <Link className="whiteButton" to="/signIn">
            Sign in to view comments
          </Link>
        ) : (
          <div className="width100 flex-column">
            <h5>Comments:</h5>
            <ul className="commentList">
              {this.state.error === null ? (
                this.displayComments()
              ) : (
                <p>{this.state.error}</p>
              )}
            </ul>
            <p></p>
            {TokenService.hasAuthToken() === true ? (
              <button
                className="whiteButton"
                id="add"
                onClick={this.clickAddComment}
                type="button"
              >
                Add Comment
              </button>
            ) : (
              <h6>Sign in to comment</h6>
            )}
            <AddComment
              getComments={this.getComments}
              siteId={this.props.siteId}
            />
          </div>
        )}
      </div>
    );
  }
}

export default CommentList;
