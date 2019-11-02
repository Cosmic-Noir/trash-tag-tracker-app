import React, { Component } from "react";
import siteContext from "../siteContext";
import config from "../config";
import "./cleanSite.css";

class CleanSite extends Component {
  state = {
    error: null,
    clean: true,
    after_img: "",
    content: ""
  };

  static contextType = siteContext;

  // PATCH request:
  patchSite = () => {
    const url = config.API_ENDPOINT + "sites/" + this.props.match.params.siteId;

    const siteToClean = this.state;

    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(siteToClean),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            Promise.reject(error);
          });
        }
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.patchSite();
    this.props.history.push("/sites");
  };

  updateContent = content => {
    this.setState({ content: content });
  };

  updateAfterImg = event => {
    this.setState({ after_img: event.target.files[0] });
  };

  handleCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="clean">
        <h2>Mark A Trash Site As Cleaned:</h2>
        <h3>{this.state.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="description">Updated Description:</label>
          <textarea
            name="content"
            id="content"
            // value={this.state.description}
            required
            onChange={e => this.updateContent(e.target.value)}
          />
          <label htmlFor="after_img">Upload Image:</label>
          <input
            type="file"
            name="after_img"
            id="after_img"
            ref={this.after_img}
            required
            onChange={e => this.updateAfterImg(e)}
          />
          <button type="button" onClick={this.handleCancel}>
            Cancel
          </button>
          <button type="submit">Mark Site as Clean</button>
        </form>
      </div>
    );
  }
}

export default CleanSite;
