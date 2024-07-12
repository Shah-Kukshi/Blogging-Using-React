import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
// import SearchBar from "./pages/SearchBar";
import "./assets/css/style.css";
import logo from "./assets/images/logo.svg";

function Header() {
  // 
  return (
    <header className="header section" data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} width="129" height="40" alt="Blogy logo" />
        </Link>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link
                to="/"
                className="navbar-link hover:underline"
                data-nav-link
              >
                {" "}
                Home
              </Link>
            </li>

            <li className="navbar-item">
              <Link
                to="/Features"
                className="navbar-link hover:underline"
                data-nav-link
              >
                {" "}
                Features
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/AboutUs"
                className="navbar-link hover:underline"
                data-nav-link
              >
                {" "}
                About Us
              </Link>
            </li>

    
          </ul>
        </nav>

        <div className="wrapper">
          {/* <button
            className="search-btn"
            aria-label="search"
            data-search-toggler
          >
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

            <span className="span">Search</span>
          </button> */}

          <button
            className="nav-toggle-btn"
            aria-label="toggle menu"
            data-nav-toggler
          >
            <span className="span one"></span>
            <span className="span two"></span>
            <span className="span three"></span>
          </button>

          <Link to="/Join" className="btn">
            Join
          </Link>
        </div>
      </div>
      {/* <SearchBar /> */}
    </header>
  );
}

export default Header;
