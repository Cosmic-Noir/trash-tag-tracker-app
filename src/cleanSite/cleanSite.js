import React, { Component } from "react";
import siteContext from "../siteContext";
import "./cleanSite.css";

class CleanSite extends Component {
  static contextType = siteContext;

  state = {
    error: null,
    id: "",
    clean: "false",
    description: "",
    afterImg: ""
  };

  hanldeSubmit = e => {
    e.preventDefault();
    this.setState({ clean: "true" });

    // const { siteId } = this.props.match.params;

    // const { id, title, description, afterImg } = this.state;
    // const cleanedSite = { id, title, description, afterImg };
  };

  resetFields = () => {
    this.setState({
      id: "",
      clean: "false",
      description: "",
      afterImg: ""
    });
  };

  handleChangeDescripton = e => {
    this.setState({ description: e.target.value });
  };

  render() {
    // eslint-disable-next-line
    const selectedSite = this.context.sites.sites.find(site => {
      const numberProp = parseInt(this.props.match.params.siteId);
      if (site.id === numberProp) {
        console.log(site);
        return site;
      }
    });
    return (
      <div className="clean">
        <h2>Mark A Trash Site As Cleaned:</h2>
        <h3>{selectedSite.title}</h3>
        <form>
          <input type="hidden" name="id" />
          <label htmlFor="description">Updated Description:</label>
          <textarea
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChangeDescripton}
          />
          <label htmlFor="afterImg">Upload After Photo:</label>
          <button>Upload</button>
          <button type="submit">Mark Site as Clean</button>
        </form>
      </div>
    );
  }
}

export default CleanSite;
