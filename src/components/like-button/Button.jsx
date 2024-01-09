import React from "react";
import "./button.css";

const Button = ({ onClick, style }) => {
  return (
    <button className={`button button-like ${style}`} onClick={onClick}>
      <i className={`fa fa-heart `}></i>
      <span>Like</span>
    </button>
  );
};

export default Button;
