import React, { Component } from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import images from "../data.json";

class ImageGridList extends Component {
  render() {
    const { size: { width } } = this.props;

    return (
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={width <= 768 ? "100%" : "33.33%"}
      >
        <div key="key1">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        <div key="key2">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        <div key="key3">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        <div key="key4">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        <div key="key5">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        <div key="key6">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        <div key="key7">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        <div key="key8">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        <div key="key9">
          <img className="gallery-img" src={`../images/gallery/test.jpg`} />
        </div>
        {/* {<img className="gallery-img" src={`../images/gallery/test.jpg`} />} */}
      </StackGrid>
    );
  }
}

export default sizeMe()(ImageGridList);
