import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary shadow-sm">
      <div className="container-md">
        <Link to="/" className="navbar-brand">
          developer.sky
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/service" className="nav-link">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink  to="/contact" className="nav-link">Contact</NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
