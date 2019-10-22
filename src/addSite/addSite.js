import React, { Component } from "react";
import siteContext from "../siteContext";

class AddSite extends Component {
  state = {
    id: "",
    clean: "false",
    title: "",
    address: "",
    stateAbr: "",
    description: "",
    beforeImg: "",
    afterImg: ""
  };

  static contextType = siteContext;

  // Methods to update state
  updateId() {
    let newId = Math.floor(Math.random() * 1000);
    console.log(newId);
    this.setState({ id: newId });
  }

  updateTitle(title) {
    this.setState({ title: title });
  }

  updateAddress(address) {
    this.setState({ address: address });
  }

  updateState(state) {
    this.setState({ stateAbr: state });
  }

  updateDescription(description) {
    this.setState({ description: description });
  }

  updateBeforeImg(beforeImg) {
    this.setState({ beforeImg: beforeImg });
  }

  // submit info in form
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let newSite = this.state;
    this.context.addNewSite(newSite);
    this.props.history.push("/sites");
  };

  componentDidMount() {
    this.updateId();
  }

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
          <input
            type="text"
            name="title"
            id="title"
            ref={this.title}
            onChange={e => this.updateTitle(e.target.value)}
          ></input>
          <label htmlFor="address">Address(aprox):</label>
          <input
            type="address"
            name="address"
            id="address"
            ref={this.address}
            onChange={e => this.updateAddress(e.target.value)}
          ></input>
          <label htmlFor="state">State:</label>
          <select
            name="stateAbr"
            id="stateAbr"
            ref={this.stateAbr}
            onChange={e => this.updateState(e.target.value)}
          >
            <option value="CO">CO</option>
            <option value="MN">MN</option>
            <option value="NE">NE</option>
          </select>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            ref={this.description}
            onChange={e => this.updateDescription(e.target.value)}
          ></textarea>
          <label htmlFor="beforeImg">Photo web address:</label>
          <input
            type="text"
            name="beforeImg"
            id="beforeImg"
            ref={this.beforeImg}
            onChange={e => this.updateBeforeImg(e.target.value)}
          ></input>
          <button type="submit">Add Site</button>
        </form>
      </div>
    );
  }
}

export default AddSite;
