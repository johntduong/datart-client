import React from "react";
import images from "../data.json";

// {const ImageGridItem = props => (
//   <div
//     className="grid-item-container"
//     key={props.itemNum}
//     onClick={props.handler}
//   >
//     <img
//       className="gallery-img"
//       alt={`Picture of sculpture titled ${props.title}`}
//       src={`/images/gallery/${props.poster}`}
//     />
//     <div className="after">
//       <p>Title: {props.title}</p>
//       <p>Title: {props.title}</p>
//     </div>
//   </div>
// );}

const GridItem = props => {
  return (
    <div className="grid-item-container" key={`${props.itemNum}`}>
      <img
        className="gallery-img"
        alt={`Picture of sculpture titled ${props.title}`}
        src={`/images/gallery/${props.poster}`}
      />
    </div>
  );
};

export default GridItem;
