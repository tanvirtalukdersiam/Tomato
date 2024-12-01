import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Sidevar from "./component/sidevar/Sidevar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const url = "http://localhost:3000";
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Navbar />
      <hr />
      <div className="app_content">
        <Sidevar />
        <Routes>
          <Route exact path="/add" element={<Add url={url} />} />
          <Route exact path="/list" element={<List url={url} />} />
          <Route exact path="/orders" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
