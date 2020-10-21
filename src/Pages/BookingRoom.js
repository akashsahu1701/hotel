import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpg";

const BookingRoom = ({ booking }) => {
  return (
    <div className="room-page">
      <button className="button">
        <Link to="/">
          <span>Home</span>
        </Link>
      </button>
      <h1>Rooms</h1>
      <div className="section">
        <img src={img1} alt="" className="main-image img" />
        <h3>Price : Rs. 2000 Per Day</h3>
        <button className="button" onClick={booking}>
          <Link to="/bookrooms/bookingcompleted">
            <span>BOOK</span>
          </Link>
        </button>
      </div>
      <div className="section">
        <img src={img2} alt="" className="main-image img" />
        <h3>Price : Rs. 1500 Per Day</h3>
        <button className="button" onClick={booking}>
          <Link to="/bookrooms/bookingcompleted">
            <span>BOOK</span>
          </Link>
        </button>
      </div>
      <div className="section">
        <img src={img3} alt="" className="main-image img" />
        <h3>Price : Rs. 2500 Per Day</h3>
        <button className="button" onClick={booking}>
          <Link to="/bookrooms/bookingcompleted">
            <span>BOOK</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BookingRoom;
