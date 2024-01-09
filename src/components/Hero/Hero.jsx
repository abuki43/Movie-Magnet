import React, { useContext, useState } from "react";
import "./Hero.css";

import { MovieContext } from "../../context/movieContext";

const Hero = () => {
  const { searchMovie } = useContext(MovieContext);
  const [searchTitle, setSearchTitle] = useState("");
  const searchBtnHandler = () => {
    console.log(searchTitle);
    searchMovie(searchTitle);
    setSearchTitle("");
  };
  return (
    <div className="hero">
      <h2>Welcome to Movie Magnet.</h2>
      <h4>Search to any movie add to your watchlist.</h4>
      <input
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <button onClick={searchBtnHandler}>Search</button>
    </div>
  );
};

export default Hero;
