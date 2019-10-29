import React, { Component } from "react";
import siteContext from "../siteContext";

class AddSite extends Component {
  state = {
    error: null,
    id: "",
    clean: "false",
    title: "",
    adrss: "",
    city: "",
    state_abr: "",
    content: "",
    before_img: "",
    after_img: ""
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

  updateAddrss(addrss) {
    this.setState({ addrss: addrss });
  }

  updateCity(city) {
    this.setState({ city: city });
  }

  updateState(state_abr) {
    this.setState({ state_abr: state_abr });
  }

  updateContent(content) {
    this.setState({ content: content });
  }

  updateBeforeImg(event) {
    console.log(event.target.files[0]);
    this.setState({ before_img: event.target.files[0] });
  }

  // submit info in form
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.title.length < 1) {
      this.setState({ error: `Please enter a title` });
    } else if (this.state.addrss.length < 1) {
      this.setState({ error: `Please enter an address` });
    } else if (this.state.city.length < 1) {
      this.setState({ error: `Please enter a valid city name` });
    } else if (this.state.content.length < 1) {
      this.setState({ error: `Please enter a description` });
    } else if (this.state.state_abr.length !== 2) {
      this.setState({ error: `Please select a valid state` });
    } else {
      let newSite = this.state;
      this.context.addNewSite(newSite);
      this.props.history.push("/sites");
    }
  };

  componentDidMount() {
    // can remove once hooked up to database
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
          <label htmlFor="addrss">Address(aprox):</label>
          <input
            type="addrss"
            name="addrss"
            id="addrss"
            ref={this.addrss}
            onChange={e => this.updateAddrss(e.target.value)}
          ></input>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            ref={this.city}
            onChange={e => this.updateCity(e.target.value)}
          />
          <label htmlFor="state">State:</label>
          <select
            name="state_abr"
            id="state_abr"
            ref={this.state_abr}
            onChange={e => this.updateState(e.target.value)}
          >
            <option>State</option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
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
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
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
            <option value="WY">WY</option>
          </select>
          <label htmlFor="content">Description:</label>
          <textarea
            name="content"
            id="content"
            ref={this.content}
            onChange={e => this.updateContent(e.target.value)}
          ></textarea>
          <label htmlFor="before_img">Upload Image:</label>
          <input
            type="file"
            name="before_img"
            id="before_img"
            ref={this.before_img}
            onChange={e => this.updateBeforeImg(e)}
          />
          {/* <input
            type="text"
            name="before_img"
            id="before_img"
            ref={this.before_img}
            onChange={e => this.updateBeforeImg(e.target.value)}
          ></input> */}
          {this.state.error !== null ? (
            <h5 className="error">{this.state.error}</h5>
          ) : (
            ""
          )}
          <button type="submit" onClick={this.uploadPic}>
            Add Site
          </button>
        </form>
      </div>
    );
  }
}

export default AddSite;
