import React, { useState, useEffect, useContext } from "react";
import Modal from "../modal/modal";
import { MovieContext } from "../../context/movieContext";
import { checkMovieSaved } from "../../util/Localstorage";
import "./card.css";

const Card = ({ movie }) => {
  const { saveMovie, removeMovie } = useContext(MovieContext);

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("clicked", isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (checkMovieSaved(movie.title)) {
      setIsInWishlist(true);
    }
  }, [movie]);

  const addToWishlist = () => {
    if (!isInWishlist) {
      saveMovie(movie);
      setIsInWishlist(true);
    } else {
      removeMovie(movie.id);
      setIsInWishlist(false);
    }
  };

  return (
    <div className="card">
      <img
        src={movie.poster_path}
        alt={movie.Title}
        onClick={handleOpenModal}
      />
      <h3>{movie.original_title}</h3>
      <p>Rating: {movie.vote_average}</p>
      <button
        onClick={addToWishlist}
        className={isInWishlist ? "wishlist-btn active" : "wishlist-btn"}
      >
        {isInWishlist ? "remove" : "Add to wishList"}
      </button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} movie={movie} />
      )}
    </div>
  );
};

export default Card;
