import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";
import Search from "./Search";

const HeaderTwo = () => {
  const location = useLocation(); // Hook to get the current location
  return (
    <Fragment>
      <div className="navbar navbar-expand-lg navbar-light d-flex flex-row">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0 d-flex justify-content-around w-50 header-color">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link
                className={`nav-link nav-link-custom ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/product" ? "active" : ""
              }`}
            >
              <Link
                className={`nav-link nav-link-custom ${
                  location.pathname === "/product" ? "active" : ""
                }`}
                to="/product"
              >
                Products
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link
                className={`nav-link nav-link-custom ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link
                className={`nav-link nav-link-custom ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/service" ? "active" : ""
              }`}
            ></li>
          </ul>
        </div>
        <div className="container-fluid mt-2 d-md-none d-flex justify-content-between w-100 mr-auto">
          <Search />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderTwo;
