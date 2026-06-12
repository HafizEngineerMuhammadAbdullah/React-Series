import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="py-4 px-8 flex justify-between items-center bg-cyan-900">
      <h2 className="text-2xl font-bold">Herions</h2>
      <div className="flex gap-10">
        {/* <a className="text-lg font-medium" href="/">
          Home
        </a>
        <a className="text-lg font-medium" href="/about">
          About
        </a>
        <a className="text-lg font-medium" href="/contact">
          Contact Us
        </a>
        <a className="text-lg font-medium" href="/product">
          Product
        </a> */}
        <Link className="text-lg font-medium" to="/">Home</Link>
        <Link className="text-lg font-medium" to="/about">About</Link>
        <Link className="text-lg font-medium" to="/contact">Contact Us</Link>
        <Link className="text-lg font-medium" to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
