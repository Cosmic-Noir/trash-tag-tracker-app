import React, { Component } from "react";
import config from "../../config";

/* Custom Components */
import TokenService from "../../auth/token-service";

/* Styling & Images */
import "./cleanSite.css";

/* Context */
import siteContext from "../../siteContext";

class CleanSite extends Component {
  state = {
    error: null,
    clean: true,
    after_img: "",
    content: ""
  };

  static contextType = siteContext;

  /* Custom Methods */

  // Responsible for PATCH request to patch existing trash site
  patchSite = () => {
    const url = config.API_ENDPOINT + "sites/" + this.props.match.params.siteId;

    // Create form data to allow file upload from after_img
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

  // NEED TO WRITE CONTENT VALIDATION
  // Responsible for validating form input and setting error state
  handleSubmit = e => {
    e.preventDefault();
    this.patchSite();
  };

  /* State updating methods */
  updateContent = content => {
    this.setState({ content: content });
  };

  updateAfterImg = event => {
    this.setState({ after_img: event.target.files[0] });
  };

  // Responsible for when user clicks cancel button
  handleCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="flex-column" data-aos="fade-in" data-aos-duration="1000">
        <h2 className="title">Mark A Trash Site As Cleaned:</h2>
        <h3>{this.state.title}</h3>
        <form
          className="flex-column"
          id="clean_form"
          onSubmit={this.handleSubmit}
        >
          <label className="subtitle" htmlFor="description">
            Updated Description:
          </label>
          <textarea
            className="desc"
            id="content"
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
            name="after_img"
            onChange={e => this.updateAfterImg(e)}
            ref={this.after_img}
            required
            type="file"
          />

          <button className="whiteButton" type="submit">
            Mark Site as Clean
          </button>
          <button
            className="whiteButton"
            onClick={this.handleCancel}
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default CleanSite;
