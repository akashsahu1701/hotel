import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
import BookingRoom from "./Pages/BookingRoom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Navbar />
          <Home />
          <AboutUs />
          <Rooms />
          <Services />
          <Gallery />
          <Things />
          <Review />
          <ContactForm />
        </Route>

        <Route path="/bookrooms">
          <BookingRoom />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
