import React from "react";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";
import img5 from "./img5.svg";
import img6 from "./img6.svg";

const Services = () => {
  return (
    <div id="Services" className="service-section">
      <h1> OUR SERVICES</h1>
      <div className="flex">
        <div className="services">
          <div>
            <img src={img1} alt="" className="service-icon" />
          </div>
          <p>FREE WIFI</p>
          <p>I'm a paragraph. Click here to add your own text and edit me</p>
        </div>
        <div className="services">
          <div>
            <img src={img2} alt="" className="service-icon" />
          </div>
          <p>BreakFast</p>
          <p>I'm a paragraph. Click here to add your own text and edit me</p>
        </div>
        <div className="services">
          <div>
            <img src={img3} alt="" className="service-icon" />
          </div>
          <p>POOL</p>
          <p>I'm a paragraph. Click here to add your own text and edit me</p>
        </div>
        <div className="services">
          <div>
            <img src={img4} alt="" className="service-icon" />
          </div>
          <p>HOUSEKEEPING</p>
          <p>I'm a paragraph. Click here to add your own text and edit me</p>
        </div>
        <div className="services">
          <div>
            <img src={img5} alt="" className="service-icon" />
          </div>
          <p>DINNER</p>
          <p>I'm a paragraph. Click here to add your own text and edit me</p>
        </div>
        <div className="services">
          <div>
            <img src={img6} alt="" className="service-icon" />
          </div>
          <p>GARDEN</p>
          <p>I'm a paragraph. Click here to add your own text and edit me</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
