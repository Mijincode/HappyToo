import React from "react";
import { Link } from "react-router-dom";
import Jeremy from "../assets/jeremy.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="image-container">
        <img src={Jeremy} alt="Hero image" className="hero-img" />
      </div>
      <div>
        <div className="content-wrapper">
          <div className="text-container">
            <h1>Empowering Your Business </h1>
            <h1>with Science-Backed Strategies</h1>
          </div>
          <Link to="/contact" className="hero-button">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
