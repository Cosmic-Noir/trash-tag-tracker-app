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
      <li className="comment comment_title itemBorder">
        <h5 className="comment_title inline_block">
          Posted By: {this.props.username}
        </h5>
        <h5 className="comment_title date">
          Date Posted: {this.createDate(this.props.date_posted)}
        </h5>
        <p className="comment_content">{this.props.content}</p>
      </li>
    );
  }
}

export default Comment;
