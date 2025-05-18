import React from "react";
import { Link } from "react-router-dom";
import services from "./ServiceData";
import ServiceCards from "./ServiceCards";
import "../components/ServiceSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const ServiceSection = () => {
  return (
    <section id="services" className="service-section">
      <div className="service-container">
        <div>
          <h2 className="title-main">Business Consulting Services</h2>
          <p className="title-sub">
            We offer a range of tailored services to help your business grow and
            succeed.
          </p>
        </div>
        <div className="slider-wrapper">
          <Slider {...sliderSettings}>
            {Object.values(services).map((service, index) => (
              <ServiceCards
                key={index}
                icon={service.icon}
                title={service.title}
                lists={service.lists}
              />
            ))}
          </Slider>
        </div>

        <div className="button-container">
          <Link to="/contact" className="service-button">
            Get in Touch with Us
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
