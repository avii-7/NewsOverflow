import React from "react";
import noImage from "../no_image.jpg";

export default function NewsItem(props) {
  return (
    <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
      <img src={props.imageUrl || noImage} className="card-img-top" alt="..." style={{ width: "286px", height: "161px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{props.title}...</h5>
        <p className="card-text">{props.description}...</p>
        <p className="card-text">
          <small className="text-muted">{props.published}</small>
        </p>
        <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
