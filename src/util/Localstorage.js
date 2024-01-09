export const getMoviesFromLocalStorage = () => {
  const savedMovies = localStorage.getItem("savedMovies");
  return savedMovies ? JSON.parse(savedMovies) : [];
};

export const addMovieToLocalStorage = (movie) => {
  movie.saved = true;
  const savedMovies = getMoviesFromLocalStorage();
  savedMovies.push(movie);
  localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
};

export const removeMovieFromLocalStorage = (movieId) => {
  const savedMovies = getMoviesFromLocalStorage();
  const updatedSavedMovies = savedMovies.filter(
    (movie) => movie.id !== movieId
  );
  localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
  return updatedSavedMovies;
};

export const checkMovieSaved = (movieTitle) => {
  let found = false;
  const movies = getMoviesFromLocalStorage();
  const foundMovie = movies.find((movie) => movie.title === movieTitle);
  if (foundMovie) {
    found = true;
  }
  return found;
};
