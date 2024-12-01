import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="h_h2">Order Your Favorite Food Here </h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and elevate your dining
          experience, one delicious meal at a time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
