import React from "react";
import ReactDOM from "react-dom";

import "./modal.css";

const Modal = ({ isOpen, onClose, movie }) => {
  const modalContainer = document.getElementById("modal");

  if (!isOpen) {
    return null;
  }
  const modalContent = (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="img-container">
          <img src={movie.backdrop_path} alt={movie.Title} />
        </div>
        <h2>{movie.Title}</h2>
        <p className="lead">{movie.overview}</p>
        <p className="date">released date:- {movie.release_date}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalContainer);
};
export default Modal;
