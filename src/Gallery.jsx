import React, { Component } from "react";
import Header from "./Header2";
import ImageGridList from "./ImageGridList";
import Footer from "./Footer";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header handler={this.handleToggle} />
        <ImageGridList />
        {/* {<Footer />} */}
        {/* {100% w/h element that shows full picture
            onclick of any ImageGridItem, } */}
      </div>
    );
  }
}

export default Gallery;
