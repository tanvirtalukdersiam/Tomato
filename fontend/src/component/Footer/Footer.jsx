import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            quaerat dolorum optio asperiores debitis veritatis fuga culpa quod
            ad sed? Totam iusto modi tenetur odit dolorum provident,
            exercitationem ex ducimus!
          </p>
          <div className="footer_social_icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <p>COMPANY</p>
          <ul>
            <li>Home </li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <p>GET IN TOUCH</p>
          <ul>
            <li>01743860970</li>
            <li>tanvir62003@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer_copy_right">
        <p>Copyright 2025 @ Md Tanvir - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
