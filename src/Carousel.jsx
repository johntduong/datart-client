import React, { Component } from "react";
import images from "../data.json";

class Carousel extends Component {
  render() {
    return (
      <div className="slider">
        <figure>
          <img src={`../images/slideshow/horses.jpg`} />
          <img src={`../images/slideshow/buddhas.jpeg`} />
          <img src={`../images/slideshow/horses.jpg`} />
          <img src={`../images/slideshow/buddhas.jpeg`} />
        </figure>
      </div>
    );
  }
}

export default Carousel;
