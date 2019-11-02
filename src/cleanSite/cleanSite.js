import React, { Component } from "react";
import siteContext from "../siteContext";
import config from "../config";
import "./cleanSite.css";

class CleanSite extends Component {
  state = {
    error: null,
    title: "",
    clean: true,
    after_img: "",
    state_abr: "",
    content: ""
  };

  static contextType = siteContext;

  // PATCH request:
  patchSite = () => {
    const url = config.API_ENDPOINT + "sites/" + this.props.match.params.siteId;

    const siteToClean = this.state;

    fetch(url, {
      method: "POST",
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

    let cleanedSite = this.state;
    this.context.updateSite(cleanedSite);
    this.context.increaseScore(5);
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

  componentDidMount() {
    // eslint-disable-next-line
    // const selectedSite = this.context.sites.find(site => {
    //   const numberProp = parseInt(this.props.match.params.siteId);
    //   if (site.id === numberProp) {
    //     return site;
    //   }
    // });
    // // console.log(selectedSite);
    // this.setState({
    //   id: selectedSite.id,
    //   clean: "true",
    //   title: selectedSite.title + " - Cleaned!",
    //   addrss: selectedSite.addrss,
    //   state_abr: selectedSite.state_abr,
    //   content: selectedSite.content,
    //   before_img: selectedSite.before_img
    // });
  }

  render() {
    // console.log("clean site comp rendering...");
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
