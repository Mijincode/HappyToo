import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import tick from "../assets/BulletPoint.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import "../pages/Contact.css";

const benefits = [
  "Tailored Solutions: Strategies based on real . data and your unique goals.",
  "Proven Expertise: Trusted advisors with deep industry experience.",
  " Collaborative Style: We work with you, not just for you.",
  "Measurable Impact: Real results that drive growth.",
  "Trusted & Confidential: Professional, discreet, and reliable.",
];

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      "Your request has been successfully submitted! We’ll respond within 24 hours."
    );
    event.target.reset();
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="why-container">
          <h2>Get in Touch with Us</h2>
          <h3>Why Choose Us?</h3>
          <ul className="why-us">
            {benefits.map((benefit, index) => (
              <li key={index} className="why-lists">
                <img src={tick} alt="bullet-point" className="tick" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="icons-container">
            <div>
              <a
                href="https://www.facebook.com/HappyTooService/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} className="icons" alt="Facebook" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/happytoo_service/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} className="icons" alt="Instagram" />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UC7BfDdz9dBrPD_9yME7nyOg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} className="icons youtube" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <label>
              Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="input-line"
                required
              />
            </label>

            <label>
              Phone No. <span style={{ color: "grey" }}>(optional)</span>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="input-line"
              />
            </label>

            <label>
              Email <span style={{ color: "red" }}>*</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-line"
                required
              />
            </label>
            <label>
              Enquiry Type:
              <select className="input-line-dropdown">
                <option value="disabled selected">Choose Your Enquiry</option>
                <option value="marketing">Marketing Enquiry</option>

                <option value="ecommerce">eCommerce Enquiry</option>

                <option value="general">General Enquiry</option>
              </select>
            </label>

            <label>
              Message:
              <textarea
                className="text-area"
                placeholder="Write your message here..."
              ></textarea>
            </label>
            <div className="submit-container">
              <button className="button">Submit</button>
              <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className="toast-message"
                toastClassName="toast-box"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
