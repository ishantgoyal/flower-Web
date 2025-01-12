import React from "react";
import { Select } from "antd";
import { UpOutlined } from "@ant-design/icons";
// import "./Footer.css";

const Footer = () => {
  const { Option } = Select;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#contact">Contact Us</a>
          <a href="#legal">Legal</a>
          <a href="#cookies">Cookies</a>
          <a href="#about">About Us</a>
          <a href="#sitemap">Site Map</a>
          <a href="#directory">Auction Lot Directory</a>
          <a href="#accessibility">Accessibility</a>
        </div>
        <div className="footer-language">
          <span>Select Language</span>
          <Select defaultValue="English" style={{ width: 120 }}>
            <Option value="English">English</Option>
            <Option value="Hindi">Hindi</Option>
            <Option value="Spanish">Spanish</Option>
          </Select>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright © eshant Ltd 2025</span>
        <div className="footer-up">
          <UpOutlined />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
