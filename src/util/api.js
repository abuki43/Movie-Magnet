export const fetchMovies = async (title) => {
  let results = { error: false, result: [] };
  const url = `https://advanced-movie-search.p.rapidapi.com/search/movie?query=${title}&page=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1de58f0c09msh220fc735f8fcf9fp147accjsn26179287508c",
      "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    results = { error: false, result: data.results };
    console.log(data.results);
  } catch (error) {
    results = { error: true, result: [] };
    console.error(error);
  }
  return results;
};

export const fetchWithGenere = async (genereNum) => {
  console.log("genre", genereNum);
  let results = { error: false, result: [] };
  const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genereNum}&page=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1de58f0c09msh220fc735f8fcf9fp147accjsn26179287508c",
      "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    results = { error: false, result: data.results };
    console.log(data.results);
  } catch (e) {
    results = { error: true, results: [] };
    console.error(e);
  }
  return results;
};
