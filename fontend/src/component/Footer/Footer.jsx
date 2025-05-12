import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <h4 className="logos">CraveFeast</h4>
          <p>
            At CraveFeast, we’re dedicated to serving mouthwatering meals
            crafted from the freshest ingredients. Our goal is to satisfy your
            cravings and provide an unforgettable dining experience. Thank you
            for choosing us to indulge in flavor.
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
            <li>+1 (416) 555-1234</li>
            <li>craveFeast@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer_copy_right">
        <p>Copyright 2025 @ Mujahid- All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
