import React, { Component } from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import ImageGridItem from "./ImageGridItem";
import images from "../data.json";

class ImageGridList extends Component {
  render() {
    const { size: { width } } = this.props;

    // {return (
    //   <div className="grid-container">
    //     <StackGrid
    //       monitorImagesLoaded={true}
    //       columnWidth={width <= 768 ? "100%" : "33.33%"}
    //     >
    //       {images.art.map(art => (
    //         <ImageGridItem
    //           key={art.itemNum}
    //           value={art.poster}
    //           handler={this.handleClick}
    //           {...art}
    //         />
    //       ))}
    //     </StackGrid>
    //   </div>
    // );}
    return (
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={width <= 768 ? "100%" : "33.33%"}
      >
        {images.art.map(art => <ImageGridItem key={art.itemNum} {...art} />)}
      </StackGrid>
    );
  }
}

export default sizeMe()(ImageGridList);
