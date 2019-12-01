import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div
      className="dashboard flex-column"
      data-aos="fade-in"
      data-aos-duration="2000"
    >
      <h2 className="title">Welcome back!</h2>
      <h3 className="subtitle">What would you like to do?</h3>
      <Link className="whiteButton" to="/sites">
        View Trash Sites
      </Link>
      <Link className="whiteButton" to="/cleaned">
        View Cleaned Sites
      </Link>
      <Link className="whiteButton" to="/impact">
        View Impact
      </Link>
      <Link className="whiteButton" to="/addSite">
        Add New Trash Site
      </Link>

      <a
        className="whiteButton"
        href="https://www.epa.gov/trash-free-waters/preventing-trash-source-0"
        rel="noopener noreferrer"
        target="_blank"
      >
        Ways to Reduce Trash
      </a>
    </div>
  );
}
