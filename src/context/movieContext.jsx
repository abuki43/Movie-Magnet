import React, { createContext, useState, useEffect } from "react";
import { fetchMovies } from "../util/api";
import {
  getMoviesFromLocalStorage,
  addMovieToLocalStorage,
  removeMovieFromLocalStorage,
} from "../util/Localstorage.js";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [searchedMovies, setsearchedMovies] = useState({
    result: [],
    error: false,
  });
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movies = getMoviesFromLocalStorage();
    setSavedMovies(movies);
  }, []);

  const saveMovie = (movie) => {
    addMovieToLocalStorage(movie);
    const movies = getMoviesFromLocalStorage();
    setSavedMovies(movies);
  };

  const removeMovie = (movieId) => {
    const result = removeMovieFromLocalStorage(movieId);
    setSavedMovies(result);
  };

  const searchMovie = async (title) => {
    setIsLoading(true);
    console.log(isLoading);
    let result = await fetchMovies(title);
    if (result.error) {
      setIsLoading(false);
      setsearchedMovies({ error: true, result: [] });
    } else {
      setsearchedMovies({ result: result.result, error: false });
      setIsLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        searchedMovies,
        setsearchedMovies,
        searchMovie,
        isLoading,
        saveMovie,
        removeMovie,
        savedMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

//export default MovieContext
