// https://reactrouter.com/en/main/components/nav-link

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  // let activeClassName = "active";
  return (
    <div className="navbar">
      <NavLink end to="/" >Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {/* <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Home
      </NavLink>
      <NavLinkPapp

        to="/about"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}  
      >
        Dashboard
      </NavLink> */}
    </div>
  );
}

export default Navbar;
