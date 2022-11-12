import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
          className="img-fluid profile-image-pic img-thumbnail rounded-circle "
          width="70"
          alt="profile"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink className="nav-link" end to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
