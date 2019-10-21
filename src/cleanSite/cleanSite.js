import React, { Component } from "react";
import siteContext from "../siteContext";
import "./cleanSite.css";

class CleanSite extends Component {
  state = {
    error: null,
    id: "",
    clean: "false",
    description: "",
    address: "",
    state: "",
    beforeImg: "",
    afterImg: ""
  };

  static contextType = siteContext;

  hanldeSubmit = e => {
    e.preventDefault();

    const cleanedSite = this.state;
    this.context.updateSite(cleanedSite);

    // const { siteId } = this.props.match.params;

    // const { id, title, description, afterImg } = this.state;
    // const cleanedSite = { id, title, description, afterImg };
  };

  resetFields = () => {
    this.setState({
      error: null,
      id: "",
      clean: "false",
      description: "",
      address: "",
      state: "",
      afterImg: ""
    });
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

  render() {
    // eslint-disable-next-line
    const selectedSite = this.context.sites.sites.find(site => {
      const numberProp = parseInt(this.props.match.params.siteId);
      if (site.id === numberProp) {
        return site;
      }
    });
    console.log(selectedSite);

    return (
      <div className="clean">
        <h2>Mark A Trash Site As Cleaned:</h2>
        <h3>{selectedSite.title}</h3>
        <form>
          <input type="hidden" name="id" value={selectedSite.id} />
          <input
            type="hidden"
            name="beforeImg"
            value={selectedSite.beforeImg}
          />
          <input
            type="hidden"
            name="address"
            value={selectedSite.address}
            onChange={e => this.updateAddress(e.target.value)}
          />
          <input type="hidden" name="state" value={selectedSite.state} />
          <label htmlFor="description">Updated Description:</label>
          <textarea
            name="description"
            id="description"
            value={this.state.description}
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
