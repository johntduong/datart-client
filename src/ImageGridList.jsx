import React, { Component } from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import ImageGridItem from "./ImageGridItem.jsx";
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

    if (this.state.isOpen) {
      return (
        <div className="grid-container">
          <div className="modal">
            <div className="modal-slide-container">
              <img className="modal-slide" src={this.state.imageSelected} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="grid-container" />;
    }
  }
}

export default sizeMe()(ImageGridList);
