import React, { Component } from "react";
import siteContext from "../siteContext";
import Comment from "../comment/comment";
import "./commentList.css";

class CommentList extends Component {
  static contextType = siteContext;

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
          <h5>Comments:</h5>
        )}
        <ul>{comments}</ul>
        <p></p>
      </div>
    );
  }
}

export default CommentList;
