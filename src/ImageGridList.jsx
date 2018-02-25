import React, { Component } from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import ImageGridItem from "./ImageGridItem";
import images from "../data.json";

class ImageGridList extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      imageSelected: "test.jpg"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    console.log("EVENT.TARGET", e.target);
    this.setState({
      isOpen: !this.state.isOpen,
      imageSelected: e.target.src
    });
  };
  render() {
    const { size: { width } } = this.props;

    return (
      <div className="grid-container">
        <StackGrid
          monitorImagesLoaded={true}
          columnWidth={width <= 768 ? "100%" : "33.33%"}
        >
          {images.art.map(art => (
            <ImageGridItem
              key={art.itemNum}
              value={art.poster}
              handler={this.handleClick}
              {...art}
            />
          ))}
        </StackGrid>
        <div className="modal" />
      </div>
    );
  }
}

export default sizeMe()(ImageGridList);
