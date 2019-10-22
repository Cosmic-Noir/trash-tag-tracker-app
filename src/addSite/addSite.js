import React, { Component } from "react";

class AddSite extends Component {
  state = {};

  render() {
    return (
      <div className="addSite">
        <h2>Add a new site that needs cleaning:</h2>
        <form>
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
        </form>
      </div>
    );
  }
}

export default AddSite;
