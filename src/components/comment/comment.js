import React, { Component } from "react";

/* Styling & Images */
import "./comment.css";

class Comment extends Component {

  // Responsbitle for creating readable time stamp for display
  createDate = date => {
    if (this.props.date_posted) {
      return date.slice(0, 10);
    }
  };

  render() {
    return (
      <li className="comment">
        <h5>Posted By: {this.props.username}</h5>
        <h5>Date Posted: {this.createDate(this.props.date_posted)}</h5>
        <p>{this.props.content}</p>
      </li>
    );
  }
}

export default Comment;
