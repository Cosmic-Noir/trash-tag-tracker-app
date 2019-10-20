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

  updateDescription = e => {
    this.setState({ description: e });
  };

  render() {
    // eslint-disable-next-line
    const selectedSite = this.context.sites.sites.find(site => {
      const numberProp = parseInt(this.props.match.params.siteId);
      if (site.id === numberProp) {
        console.log(this.state);
        return site;
      }
      // this.setState({
      //   error: null,
      //   id: selectedSite.id,
      //   address: selectedSite.address,
      //   state: selectedSite.state,
      //   beforeImg: selectedSite.beforeImg
      // });
    });
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
          <input type="hidden" name="address" value={selectedSite.address} />
          <input type="hidden" name="state" value={selectedSite.state} />
          <label htmlFor="description">Updated Description:</label>
          <textarea
            name="description"
            id="description"
            value={this.state.description}
            onChange={e => this.updateDescription(e.target.value)}
          />
          <label htmlFor="afterImg">Photo web address:</label>
          <input type="text" name="afterImg" value={selectedSite.afterImg} />
          <button type="submit">Mark Site as Clean</button>
        </form>
      </div>
    );
  }
}

export default CleanSite;
