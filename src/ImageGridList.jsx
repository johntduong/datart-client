import React, { Component } from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import ImageGridItem from "./ImageGridItem";
import images from "../data.json";

class ImageGridList extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
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
