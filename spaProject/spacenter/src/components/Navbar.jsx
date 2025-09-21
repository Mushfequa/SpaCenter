import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
        <Link to="/" className="navbar-brand ml-lg-3">
          <h1 className="m-0 text-primary">
            <span className="text-dark">SPA</span> Center
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-lg-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav m-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Services
            </Link>
            <Link to="/price" className="nav-item nav-link">
              Pricing
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/appointment" className="dropdown-item">
                  Appointment
                </Link>
                <Link to="/opening" className="dropdown-item">
                  Open Hours
                </Link>
                <Link to="/team" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link to="/appointment" className="btn btn-primary d-none d-lg-block">
            Book Now
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
