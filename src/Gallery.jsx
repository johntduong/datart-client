import React, { Component } from "react";
import Header from "./Header2";
import ImageGridList from "./ImageGridList";
import Footer from "./Footer";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header handler={this.handleToggle} />
        <div className="gallery-img-container">
          <img
            className="gallery-main"
            src={`../images/gallery/gallery-main.jpg`}
          />
        </div>
        <div className="grid-container">
          <ImageGridList />
        </div>
        {/* {<Footer />} */}
      </div>
    );
  }
}

export default Gallery;
