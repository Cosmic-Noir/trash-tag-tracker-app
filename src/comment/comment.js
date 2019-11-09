import React, { Component } from "react";
import "./comment.css";

class Comment extends Component {
  // Change string into more readable format, return to string
  parseISOStrings = s => {
    const b = s.split(/\D+/);
    const date = new Date(
      Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])
    ).toString();
    return date;
  };

  render() {
    return (
      <li className="comment">
        <h5>Posted By: {this.props.username}</h5>
        <h5>Date Posted: {this.parseISOStrings(this.props.date_posted)}</h5>
        <p>{this.props.content}</p>
      </li>
    );
  }
}

export default Comment;
