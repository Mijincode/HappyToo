import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/HappyTooLogo.png";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <nav className="container">
        <div className="logo-container">
          <img src={logo} alt="Happy Too Logo" className="logo-img" />
        </div>

        <div className="nav-bar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
