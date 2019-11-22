import React, { Component } from "react";
import siteContext from "../siteContext";
import config from "../config";
import TokenService from "../auth/token-service";
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

    const form = new FormData();
    form.append("content", this.state.content);
    form.append("clean", this.state.clean);
    form.append("after_img", this.state.after_img);

    fetch(url, {
      method: "PATCH",
      body: form,
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
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
        this.context.getCleanSites();
        this.context.getTrashSites();
        this.props.history.push("/cleaned");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.patchSite();
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
      <div className="flex-column">
        <h2 className="title">Mark A Trash Site As Cleaned:</h2>
        <h3>{this.state.title}</h3>
        <form
          id="clean_form"
          className="flex-column"
          onSubmit={this.handleSubmit}
        >
          <label className="subtitle" htmlFor="description">
            Updated Description:
          </label>
          <textarea
            id="after_desc"
            name="content"
            onChange={e => this.updateContent(e.target.value)}
            required
          />
          <label className="subtitle" htmlFor="after_img">
            Upload Image:
          </label>
          <input
            className="formInput"
            id="after_img"
            onChange={e => this.updateAfterImg(e)}
            name="after_img"
            ref={this.after_img}
            required
            type="file"
          />
          <button
            className="whiteButton"
            onClick={this.handleCancel}
            type="button"
          >
            Cancel
          </button>
          <button className="whiteButton" type="submit">
            Mark Site as Clean
          </button>
        </form>
      </div>
    );
  }
}

export default CleanSite;
