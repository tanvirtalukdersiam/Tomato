import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore_menu" id="explore_menu">
      <h3>Check Out Our Dishes</h3>
      <p className="explore_menu_text">
        Explore a diverse menu filled with mouthwatering dishes made from
        quality ingredients. Our mission is to satisfy your cravings and elevate
        your dining experience with every flavorful, satisfying bite you take.
      </p>
      <div className="explore_menu_list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore_menu_list_item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt=""
            />
            <h4>{item.menu_name}</h4>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
