import React from "react";
import "./Sidevar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
const Sidevar = () => {
  return (
    <div className="sidevar">
      <div className="sidevar_options">
        <NavLink to={"/add"} className="sidevar_option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to={"/list"} className="sidevar_option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to={"/orders"} className="sidevar_option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidevar;
