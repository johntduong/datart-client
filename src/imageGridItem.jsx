import React, { Component } from "react";
import images from "../data.json";

const ImageGridItem = props => (
  <div
    className="grid-item-container"
    key={props.itemNum}
    onClick={props.handler}
  >
    <img
      className="gallery-img"
      alt={`Picture of sculpture titled ${props.title}`}
      src={`/images/gallery/${props.poster}`}
    />
    <div className="after">
      <p>Title: {props.title}</p>
    </div>
  </div>
);

export default ImageGridItem;
