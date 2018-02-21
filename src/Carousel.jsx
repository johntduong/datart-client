import React, { Component } from "react";
import images from "../data.json";

class Carousel extends Component {
  render() {
    return (
      <div className="slider">
        <figure>
          <img
            src={`https://images-na.ssl-images-amazon.com/images/I/814Qpd98BKL._SL1440_.jpg`}
          />
          <img
            src={`https://images-na.ssl-images-amazon.com/images/I/814Qpd98BKL._SL1440_.jpg`}
          />
          <img
            src={`https://images-na.ssl-images-amazon.com/images/I/814Qpd98BKL._SL1440_.jpg`}
          />
          <img
            src={`https://images-na.ssl-images-amazon.com/images/I/814Qpd98BKL._SL1440_.jpg`}
          />
        </figure>
      </div>
    );
  }
}

export default Carousel;
