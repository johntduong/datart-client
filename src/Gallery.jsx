import React, { Component } from "react";
import Header from "./Header2";
import ImageGridList from "./ImageGridList";
import Footer from "./Footer";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header handler={this.handleToggle} />
        <div className="grid-container">
          <ImageGridList />
        </div>
        {/* {<Footer />} */}
      </div>
    );
  }
}

export default Gallery;
