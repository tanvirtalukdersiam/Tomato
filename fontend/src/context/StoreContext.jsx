import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:3000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const addtoCart = async (itemId) => {
    // setCartItems((prev) => ({
    //   ...prev,
    //   [itemId]: (prev[itemId] || 0) + 1,
    // }));

    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url + "/cart/add", { itemId }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    // setCartItems((prev) => {
    //   const updatedCart = { ...prev };
    //   if (updatedCart[itemId] > 1) {
    //     updatedCart[itemId] -= 1;
    //   } else {
    //     delete updatedCart[itemId];
    //   }
    //   return updatedCart;
    // });
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  let getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addtoCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
