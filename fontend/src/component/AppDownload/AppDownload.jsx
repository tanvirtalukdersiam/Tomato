import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="Food_Download_app" id="Food_Download_app">
      <p>
        For better download <br /> Tomato App
      </p>
      <div className="app_download_platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
