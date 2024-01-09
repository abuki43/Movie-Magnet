import React from "react";
import image from "./Rolling-1s-200px.svg";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={image} alt="loading" />
    </div>
  );
};

export default Loading;
