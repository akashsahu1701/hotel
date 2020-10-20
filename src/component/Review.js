import React from "react";
import img from "../img3.jpg";
const Review = () => {
  return (
    <div>
      <img src={img} alt="" className="main-image" />;
      <div className="room">
        <div className="room-section">
          <h1>CUSTOMER REVIEWS</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
