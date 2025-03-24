import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Pictures/logo-f5f5f5.png"

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg navbackground">
        <div className="row navbackground ">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbackground">
              <div className="container d-flex justify-content-between align-items-center">
                <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
                  <img
                    src={logo}
                    alt="Celebron Logo"
                    height="45"
                    className="d-inline-block"
                  />
                  <span>Celebron IT Solutions</span>
                </NavLink>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-3" id="navbarSupportedContent">
                  <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/team">Team</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
