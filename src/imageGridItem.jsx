import React, {Component} from "react";
import images from "../data.json";

const imageGridItem = (props) => (
    <div key="key1">
        <img className="gallery-img" alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    </div>
)

export default imageGridItem;