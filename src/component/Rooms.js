import React from "react";
import img from "../img2.jpg";
const Rooms = () => {
  return (
    <div id="Room">
      <div>
        <img src={img} alt="" className="main-image" />;
      </div>
      <div className="room">
        <div className="room-section">
          <h1>OUR ROOMS</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page.
          </p>
          <button className="btn">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
