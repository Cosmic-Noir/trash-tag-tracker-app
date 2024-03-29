import React, { Component } from "react";
import config from "../../config";

/* Custom Components */
import TokenService from "../../auth/token-service";

/* Styling & Images */
import "./addSite.css";

/* Context */
import siteContext from "../../siteContext";

class AddSite extends Component {
  state = {};

  static contextType = siteContext;

  /* State updating methods */
  updateTitle(title) {
    this.setState({ title });
  }

  updateAddrss(addrss) {
    this.setState({ addrss });
  }

  updateCity(city) {
    this.setState({ city });
  }

  updateState(state_abr) {
    this.setState({ state_abr });
  }

  updateContent(content) {
    this.setState({ content });
  }

  updateBeforeImg(event) {
    this.setState({ before_img: event.target.files[0] });
  }

  /* Custom Methods */

  // Responsible for POST request to post a new trash site from state
  addSite = () => {
    const url = config.API_ENDPOINT + "sites";

    // Create form data to allow file upload from before_img
    const form = new FormData();

    form.append("title", this.state.title);
    form.append("before_img", this.state.before_img);
    form.append("addrss", this.state.addrss);
    form.append("city", this.state.city);
    form.append("state_abr", this.state.state_abr);
    form.append("content", this.state.content);

    fetch(url, {
      method: "POST",
      body: form,
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          this.setState({ error: error.message });
          throw error;
        });
      }
      console.log(res);
      this.props.history.push("/sites");
      this.context.getTrashSites();
      return res.json();
    });
  };

  // Responsible for validating form input and setting error state
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
    } else if (this.state.content.length > 175) {
      this.setState({ error: `Max character limit of 175 exceeded` });
    } else if (this.state.state_abr.length !== 2) {
      this.setState({ error: `Please select a valid state` });
    } else {
      if (window.sessionStorage.getItem(config.TOKEN_KEY)) {
        this.addSite();
      } else {
        this.props.history.push("/demo");
      }
    }
  };

  // Responsible for when user clicks cancel button
  handleCancel = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div
        className="addSite flex-column"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <form
          className="flex-column formBorder width100"
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <h2 className="title">Add a new site that needs cleaning:</h2>
          <input
            className="formInput"
            id="title"
            onChange={e => this.updateTitle(e.target.value)}
            placeholder="Trash Site Title"
            name="title"
            ref={this.title}
            required
            type="text"
          ></input>

          <input
            className="formInput"
            id="addrss"
            onChange={e => this.updateAddrss(e.target.value)}
            placeholder="Aprox. Street Address"
            name="addrss"
            ref={this.addrss}
            required
            type="addrss"
          ></input>
          <input
            className="formInput"
            id="city"
            onChange={e => this.updateCity(e.target.value)}
            placeholder="City"
            name="city"
            ref={this.city}
            required
            type="text"
          />
          <label className="subtitle" htmlFor="state">
            State:
          </label>
          <select
            id="state_abr"
            onChange={e => this.updateState(e.target.value)}
            placeholder="state"
            name="state_abr"
            ref={this.state_abr}
            required
          >
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
          <textarea
            id="content"
            name="content"
            onChange={e => this.updateContent(e.target.value)}
            placeholder="Description of trash site and location"
            ref={this.content}
            required
          ></textarea>
          <label className="subtitle" htmlFor="before_img">
            Upload Image:
          </label>
          <input
            className="formInput"
            id="before_img"
            onChange={e => this.updateBeforeImg(e)}
            name="before_img"
            ref={this.before_img}
            required
            type="file"
          />

          {this.state.error !== null ? (
            <h5 className="error">{this.state.error}</h5>
          ) : (
            ""
          )}

          <button
            className="whiteButton"
            onClick={this.uploadPic}
            type="submit"
          >
            Add Site
          </button>
          <button
            className="whiteButton"
            onClick={this.handleCancel}
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default AddSite;
