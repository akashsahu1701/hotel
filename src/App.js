import React from "react";
import "./index.css";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Rooms from "./component/Rooms";
import Services from "./component/Services";
import Gallery from "./component/Gallery";
import Things from "./component/Things";
import Review from "./component/Review";
import ContactForm from "./component/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Rooms />
      <Services />
      <Gallery />
      <Things />
      <Review />
      <ContactForm />
    </div>
  );
};

export default App;
