import React, { Component } from "react";
import siteContext from "../siteContext";
import "./cleanSite.css";

class CleanSite extends Component {
  state = {
    error: null,
    clean: "false",
    afterImg: ""
  };

  static contextType = siteContext;

  handleSubmit = e => {
    e.preventDefault();

    let cleanedSite = this.state;
    this.context.updateSite(cleanedSite);
    this.props.history.push("/sites");
  };

  updateDescription = description => {
    this.setState({ description: description });
  };

  updateAfterImg = afterImg => {
    this.setState({ afterImg: afterImg });
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
      title: selectedSite.title,
      address: selectedSite.address,
      state: selectedSite.state,
      description: selectedSite.description,
      beforeImg: selectedSite.beforeImg
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
          <label htmlFor="afterImg">Photo web address:</label>
          <input
            type="text"
            name="afterImg"
            // value={selectedSite.afterImg}
            onChange={e => this.updateAfterImg(e.target.value)}
          />
          <button type="submit">Mark Site as Clean</button>
        </form>
      </div>
    );
  }
}

export default CleanSite;
