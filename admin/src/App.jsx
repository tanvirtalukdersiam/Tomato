import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Sidevar from "./component/sidevar/Sidevar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app_content">
        <Sidevar />
        <Routes>
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="/orders" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
