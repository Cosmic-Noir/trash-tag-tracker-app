import React, { Component } from "react";
import siteContext from "../siteContext";

class AddSite extends Component {
  state = {
    error: null,
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
    if (this.state.title.length < 1) {
      this.setState({ error: `Please enter a title` });
    } else if (this.state.address.length < 1) {
      this.setState({ error: `Please enter an address` });
    } else if (this.state.description.length < 1) {
      this.setState({ error: `Please enter a description` });
    } else {
      let newSite = this.state;
      this.context.addNewSite(newSite);
      this.props.history.push("/sites");
    }
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
            {/* <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option> */}
            <option value="CO">CO</option>
            {/* <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option> */}
            <option value="MN">MN</option>
            {/* <option value="MO">MO</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option> */}
            <option value="NE">NE</option>
            {/* <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option> */}
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
          {this.state.error !== null ? (
            <h5 className="error">{this.state.error}</h5>
          ) : (
            ""
          )}
          <button type="submit">Add Site</button>
        </form>
      </div>
    );
  }
}

export default AddSite;
