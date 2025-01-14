import React from "react";
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h3>bidding Farmers</h3>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Solutions to Sell</h4>
            <ul>
              <li><a href="#farmers">For Farmers</a></li>
              <li><a href="#hubs">For Hubs</a></li>
              <li><a href="#custom-solutions">Custom Solutions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Solutions to Buy</h4>
            <ul>
              <li><a href="#wholesale">Buy for Wholesale</a></li>
              <li><a href="#retail">Buy for Retail</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#small-farm">Small Farm Difference</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="#our-story">Our Story</a></li>
              <li><a href="#our-team">Our Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-bottom">
          <p>© 2025 Rooted Farmers, Inc. All Rights Reserved.</p>
          <div className="footer-policy">
            <a href="#privacy-policy">Privacy Policy</a>
            <span> | </span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
