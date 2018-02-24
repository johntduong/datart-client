import React, { Component } from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import ImageGridItem from "./ImageGridItem";
import images from "../data.json";

class ImageGridList extends Component {
  render() {
    const { size: { width } } = this.props;

    return (
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={width <= 768 ? "100%" : "33.33%"}
      >
        {
          images.art.map((art)=> <ImageGridItem key={art.itemNum} {...art} /> )
        }
        {/* {<div key="key1">
          <img
            className="gallery-img"
            src={`../images/gallery/bathingwoman2.jpg`}
          />
        </div>
        <div key="key2">
          <img className="gallery-img" src={`../images/gallery/buddhas2.jpg`} />
        </div>
        <div key="key3">
          <img
            className="gallery-img"
            src={`../images/gallery/fathertruong2.jpg`}
          />
        </div>
        <div key="key4">
          <img
            className="gallery-img"
            src={`../images/gallery/firstkiss2.jpg`}
          />
        </div>
        <div key="key5">
          <img
            className="gallery-img"
            src={`../images/gallery/flyingangels2.jpg`}
          />
        </div>
        <div key="key6">
          <img
            className="gallery-img"
            src={`../images/gallery/godbless2.jpg`}
          />
        </div>
        <div key="key7">
          <img
            className="gallery-img"
            src={`../images/gallery/harvestone2.jpg`}
          />
        </div>
        <div key="key8">
          <img
            className="gallery-img"
            src={`../images/gallery/harvesttwo2.jpg`}
          />
        </div>
        <div key="key9">
          <img
            className="gallery-img"
            src={`../images/gallery/holycrossrectangle2.jpg`}
          />
        </div>
        <div key="key10">
          <img className="gallery-img" src={`../images/gallery/horses2.jpg`} />
        </div>
        <div key="key11">
          <img className="gallery-img" src={`../images/gallery/ingod2.jpg`} />
        </div>
        <div key="key12">
          <img
            className="gallery-img"
            src={`../images/gallery/inlovinghand2.jpg`}
          />
        </div>
        <div key="key13">
          <img
            className="gallery-img"
            src={`../images/gallery/ladywithpaddle2.jpg`}
          />
        </div>
        <div key="key14">
          <img
            className="gallery-img"
            src={`../images/gallery/longhorn2.jpg`}
          />
        </div>
        <div key="key15">
          <img className="gallery-img" src={`../images/gallery/love2.jpg`} />
        </div>
        <div key="key16">
          <img
            className="gallery-img"
            src={`../images/gallery/motherandchild2.jpg`}
          />
        </div>
        <div key="key17">
          <img
            className="gallery-img"
            src={`../images/gallery/threegirls2.jpg`}
          />
        </div>
        <div key="key18">
          <img
            className="gallery-img"
            src={`../images/gallery/lastsupper1.jpg`}
          />
        </div>
        <div key="key19">
          <img
            className="gallery-img"
            src={`../images/gallery/lonestar1.jpg`}
          />
        </div>
        <div key="key20">
          <img
            className="gallery-img"
            src={`../images/gallery/longhorn2.jpg`}
          />
        </div>
        <div key="key21">
          <img className="gallery-img" src={`../images/gallery/stmary1.jpg`} />
        </div>} */}
        {/* {<img className="gallery-img" src={`../images/gallery/test.jpg`} />} */}
      </StackGrid>
    );
  }
}

export default sizeMe()(ImageGridList);
