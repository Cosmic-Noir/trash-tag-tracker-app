import React, { Component } from "react";
import "./comment.css";

class Comment extends Component {
  render() {
    return (
      <li className="comment">
        <h5>Posted By: {this.props.username}</h5>
        <p>{this.props.content}</p>
      </li>
    );
  }
}

export default Comment;
