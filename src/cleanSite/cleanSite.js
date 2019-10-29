import React, { Component } from "react";
import siteContext from "../siteContext";
import "./cleanSite.css";

class CleanSite extends Component {
  state = {
    error: null,
    clean: "false",
    after_img: "",
    state_abr: ""
  };

  static contextType = siteContext;

  handleSubmit = e => {
    e.preventDefault();

    let cleanedSite = this.state;
    this.context.updateSite(cleanedSite);
    this.context.increaseScore(5);
    this.props.history.push("/sites");
  };

  updateDescription = description => {
    this.setState({ description: description });
  };

  updateAfterImg = event => {
    this.setState({ afterImg: event.target.files[0] });
  };

  updateAddress = address => {
    this.setState({ address: address });
  };

  componentDidMount() {
    // eslint-disable-next-line
    const selectedSite = this.context.sites.find(site => {
      const numberProp = parseInt(this.props.match.params.siteId);
      if (site.id === numberProp) {
        return site;
      }
    });
    // console.log(selectedSite);
    this.setState({
      id: selectedSite.id,
      clean: "true",
      title: selectedSite.title + " - Cleaned!",
      addrss: selectedSite.addrss,
      state_abr: selectedSite.state_abr,
      content: selectedSite.content,
      before_img: selectedSite.before_img
    });
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
            name="description"
            id="description"
            // value={this.state.description}
            onChange={e => this.updateDescription(e.target.value)}
          />
          <label htmlFor="after_img">Upload Image:</label>
          <input
            type="file"
            name="after_img"
            id="after_img"
            ref={this.after_img}
            onChange={e => this.updateAfterImg(e)}
          />
          <button type="submit">Mark Site as Clean</button>
        </form>
      </div>
    );
  }
}

export default CleanSite;
