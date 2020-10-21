import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./pages.css";

const Booked = ({ Id }) => {
  return (
    <div className="booked-page">
      <h1>Your Room Has been Booked</h1>
      <p>
        thanks for your booking. your Booking ID is {Id}. Take screenshoot for
        Futher Proceedings
      </p>
      <button className="button">
        <Link to="/bookrooms">
          <span>View More Rooms</span>
        </Link>
      </button>
    </div>
  );
};

export default Booked;
