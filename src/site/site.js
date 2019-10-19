import React from "react";
import "./site.css";
import { Link } from "react-router-dom";

export default function Site(props) {
  return (
    <Link to={`/sites/${props.id}`}>
      <div className="site">
        <h2>{props.title}</h2>
        <h3>{props.state}</h3>
        <img src={props.imgSrc} alt="Trash site" />
      </div>
    </Link>
  );
}
