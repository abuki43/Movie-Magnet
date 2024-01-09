import React from "react";
import "./genres.css";

const Genre = ({ genereResults }) => {
  return (
    <div className="genre-container">
      <button className="genre-button" onClick={() => genereResults(28)}>
        Action
      </button>
      <button className="genre-button" onClick={() => genereResults(27)}>
        Horror
      </button>
      <button className="genre-button" onClick={() => genereResults(10749)}>
        Romantic
      </button>
      <button className="genre-button" onClick={() => genereResults(16)}>
        Animation
      </button>
      <button className="genre-button" onClick={() => genereResults(35)}>
        Comedy
      </button>
      <button className="genre-button" onClick={() => genereResults(18)}>
        Drama
      </button>
      <button className="genre-button" onClick={() => genereResults(12)}>
        Adventure
      </button>
    </div>
  );
};

export default Genre;
