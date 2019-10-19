import React from "react";
import "./site.css";

export default function Site(props) {
  return (
    <div className="site">
      <h2>{props.title}</h2>
      <h3>{props.state}</h3>
      <img src={props.imgSrc} />
    </div>
  );
}
