import React, { Component } from "react";
import { Link } from "react-router-dom";
import siteContext from "../siteContext";
import Comment from "../comment/comment";
import AddComment from "../addComment/addComment";
import "./commentList.css";

class CommentList extends Component {
  static contextType = siteContext;

  clickAddComment() {
    const element = document.getElementById("addComment");
    element.classList.remove("hidden");
    console.log("add comment should be showing");
    const addButton = document.getElementById("add");
    addButton.classList.add("hidden");
  }

  render() {
    const comments = this.context.comments.map(comment => {
      const numberProp = parseInt(this.props.siteId);
      if (comment.siteId === numberProp) {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            userRef={comment.userRef}
            content={comment.content}
          />
        );
      }
    });
    return (
      <div className="comments">
        {this.context.loggedIn === false ? (
          <h5>Comments: (Log in to comment!)</h5>
        ) : (
          <div>
            <h5>Comments:</h5>
            <button type="button" id="add" onClick={this.clickAddComment}>
              Add Comment
            </button>
            <AddComment siteId={this.props.siteId} />
          </div>
        )}
        <ul>{comments}</ul>
        <p></p>
      </div>
    );
  }
}

export default CommentList;
