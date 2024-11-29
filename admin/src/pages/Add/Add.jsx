import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
const Add = () => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
    image: null,
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add_image_uploaded flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add_products_name flex-col">
          <p>Products Name</p>
          <input type="text" name="name" placeholder="Type here" />
        </div>
        <div className="add_products_description flex-col">
          <p>Products Description</p>
          <textarea
            name="description"
            rows={"6"}
            id=""
            placeholder="Write description here"
            required
          ></textarea>
        </div>
        <div className="add_category_price ">
          <div className="add_category flex-col">
            <p>Products Category</p>
            <select name="category" id="">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add_price flex-col">
            <p>Product Price</p>{" "}
            <input type="number" name="price" placeholder="$20" />
          </div>
        </div>
        <button type="submit" className="add_btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
