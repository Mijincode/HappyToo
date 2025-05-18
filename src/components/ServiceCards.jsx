import React from "react";
import "../components/ServiceSection.css";
import { Link } from "react-router-dom";

const ServiceCards = ({ title, icon, lists }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={`${title} icon`} className="card-icons" />
      <h4 className="service-title">{title}</h4>
      <ul>
        {lists.map((list, index) => (
          <li key={index} className="card-lists">
            {list}
          </li>
        ))}
      </ul>
      <div className="card-button">
        <Link to="/services" className="service-card-link">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
