import React from "react";
import { Link } from "react-router-dom";
import NavModal from "./Modal";
import {
  AiOutlineMenu as IconA,
  AiFillCloseCircle as IconB,
} from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = React.useState(true);

  const handleNavbar = () => {
    setShow(false);
  };
  const closeNavbar = () => {
    setShow(true);
  };
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#Home">HOME</a>
        </li>
        <li>
          <a href="#About">ABOUT US</a>
        </li>
        <li>
          <a href="#Room">ROOMS</a>
        </li>
        <li>
          <a href="#Services">SERVICES</a>
        </li>
        <li>
          <a href="#Seedo">SEE & DO</a>
        </li>
        <li>
          <a href="#Contact">CONTACT</a>
        </li>
        <button className="btn-nav">
          <Link to="/bookrooms">
            <span>Book Room</span>
          </Link>
        </button>
        {show ? (
          <button className="btn-icon" onClick={handleNavbar}>
            <IconA />
          </button>
        ) : (
          <button className="btn-icon" onClick={closeNavbar}>
            <IconB />
            <NavModal show={show} closeNavbar={closeNavbar} />
          </button>
        )}
      </ul>
    </div>
  );
};
export default Navbar;
