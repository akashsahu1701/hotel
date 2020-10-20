import React from "react";
import img from "../img.jpg";
import RenderApp from "./Counter.js";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="Home">
      <h1 className="center">Aerofly</h1>
      <h3 className="center">----Magnify Your Journey----</h3>
      <img src={img} alt="oops!!" className="main-image" />
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="checkin">check in</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label htmlFor="checkout">check out</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label htmlFor="Adults">Adult</label>
            <RenderApp />
          </div>
          <div className="form-group">
            <label htmlFor="Kids">Kids</label>
            <RenderApp />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
