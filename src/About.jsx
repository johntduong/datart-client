import React from "react";
import Header from "./Header2";

const About = () => {
  return (
    <div>
      <Header handler={this.handleToggle} />
      <div className="gallery-img-container">
        <img className="about-img-text" src={`../images/about-text.jpg`} />
      </div>
    </div>
  );
};

export default About;
