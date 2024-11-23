import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food_Display" id="food_Display">
      <h4>Top dishes near you</h4>
      <div className="food_display_list">
        {food_list
          .filter((item) => category === "All" || category === item.category)
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
