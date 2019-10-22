import React, { Component } from "react";
import siteContext from "../siteContext";

class AddSite extends Component {
  state = {
    id: "",
    clean: "false",
    title: "",
    address: "",
    state: "",
    description: "",
    beforeImg: "",
    afterImg: ""
  };

  static contextType = siteContext;

  // Methods to update state
  updateId() {
    this.setState({ id: Math.floor(Math.random() * 1000), error: null });
  }

  updateTitle(title) {
    this.setState({ title: title });
  }

  updateAddress(address) {
    this.setState({ address: address });
  }

  updateState(state) {
    this.setState({ state: state });
  }

  updateDescription(description) {
    this.setState({ descrtiption: description });
  }

  updateBeforeImg(beforeImg) {
    this.setState({ beforeImg: beforeImg });
  }

  // submit info in form
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit form pressed");
  };

  render() {
    return (
      <div className="addSite">
        <h2>Add a new site that needs cleaning:</h2>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <label htmlFor="title">Title</label>
          <input type="text"></input>
          <label htmlFor="address">Address(aprox):</label>
          <input type="address"></input>
          <label htmlFor="state">State:</label>
          <select>
            <option value="CO">CO</option>
            <option value="MN">MN</option>
            <option value="NE">NE</option>
          </select>
          <label htmlFor="description">Description:</label>
          <textarea></textarea>
          <label htmlFor="beforeImg">Photo web address:</label>
          <input type="text"></input>
          <button type="submit">Add Site</button>
        </form>
      </div>
    );
  }
}

export default AddSite;
