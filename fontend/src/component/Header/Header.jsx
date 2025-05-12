import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="h_h2">Choose and Order Your Favorite Meal</h2>
        <p>
          Savor the richness of a carefully designed menu, featuring exquisite
          dishes prepared with top-quality ingredients for a refined culinary
          journey.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
