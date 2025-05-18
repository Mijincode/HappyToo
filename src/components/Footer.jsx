import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-title">Contact Us</h3>
      <div className="footer-container">
        <div className="footer-contact">
          <p>
            📞 Phone: <a href="tel:+61403882821">(+61) 403 882 821</a>
          </p>

          <p>
            📧{" "}
            <a href="mailto:inquiry@happytoo.com.au">inquiry@happytoo.com.au</a>
          </p>
        </div>

        <div className="footer-business">
          <p>Australian Business Number</p>
          <p>ABN: 11 619 860 016</p>
        </div>

        <div className="footer-links">
          <a href="#faqs">FAQs</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#legal">Legal</a>
        </div>
      </div>
      <div>
        {" "}
        <p className="footer-copyright">@ copyright : Happy Too</p>
      </div>
    </footer>
  );
};

export default Footer;
