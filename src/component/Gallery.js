import React from "react";
import img1 from "./img7.jpg";
import img2 from "./img8.jpg";
import img3 from "./img9.jpg";

const Gallery = () => {
  return (
    <div className="about-section">
      <h1>GALLERY</h1>
      <div className="gallery">
        <div className="img-galery">
          <img src={img1} alt="" />
        </div>
        <div className="img-galery">
          <img src={img2} alt="" />
        </div>
        <div className="img-galery">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
