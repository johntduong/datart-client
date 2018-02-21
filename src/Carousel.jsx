import React, { Component } from "react";
import images from "../data.json";

class Carousel extends Component {
  render() {
    return (
      <div className="slider">
        <figure>
          <img src={`../images/slideshow/Hinh 14.jpeg`} />
          <img src={`../images/slideshow/Hinh 15a.jpeg`} />
        </figure>
      </div>
    );
  }
}

export default Carousel;
