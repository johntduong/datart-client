import React, { Component } from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import GridItem from "./GridItem";
import images from "../data.json";

class ImageGridList extends Component {
  render() {
    const { size: { width } } = this.props;

    return (
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={width <= 768 ? "100%" : "33.33%"}
      >
        {images.art.map(art => <GridItem key={art.itemNum} {...art} />)}
      </StackGrid>
    );
  }
}

export default sizeMe()(ImageGridList);
