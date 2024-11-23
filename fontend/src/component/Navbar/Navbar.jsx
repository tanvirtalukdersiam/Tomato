import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar_menu">
        <Link
          to={"/"}
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#Food_Download_app"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="" />
        <div className="navBar_search_icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="navbar_button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
