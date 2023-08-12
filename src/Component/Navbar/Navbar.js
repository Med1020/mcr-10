import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="menu-items">
        Dashboard
      </NavLink>
      <NavLink to="/departments" className="menu-items">
        Departments
      </NavLink>
      <NavLink to="/products" className="menu-items">
        Products
      </NavLink>
    </div>
  );
};

export default Navbar;
