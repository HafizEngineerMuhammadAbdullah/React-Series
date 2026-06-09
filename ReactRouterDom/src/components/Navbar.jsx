import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Sheriyans</h3>
      <div>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
