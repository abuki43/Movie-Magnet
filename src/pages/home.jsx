import React, { useState, useContext, useEffect, useRef } from "react";
import Hero from "../components/Hero/Hero";
import Sidebar from "../components/sidebar/sidebar";
import "../App.css";
import Genre from "../components/genres/Genres";
import Cards from "../components/Cards/Cards";
import { MovieContext } from "../context/movieContext";
import { fetchWithGenere } from "../util/api";
import Loading from "../components/loader/Loading";

function Home() {
  const { searchedMovies, isLoading } = useContext(MovieContext);
  const [result, setResult] = useState([]);
  const [isError, setIsError] = useState({ error: false, message: "" });
  const [genreLoading, setGenreLoading] = useState(false);

  const genereResults = async (genereNum) => {
    setIsError({ error: false, message: "" });
    setGenreLoading(true);
    const datas = await fetchWithGenere(genereNum);
    if (datas.error) {
      setIsError({ error: true, message: "Error happened.." });
    } else if (datas.result == []) {
      setIsError({ error: true, message: "No result found!" });
    } else {
      setResult(datas.result);
    }
    setGenreLoading(false);
  };
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      genereResults(28);
      isFirstRun.current = false;
    }
  }, []);

  useEffect(() => {
    setIsError({ error: false, message: "" });
    setIsError(false);
    console.log(isError);

    if (searchedMovies.error) {
      setIsError({ error: true, message: "Error happened.." });
    } else if (searchedMovies.result == []) {
      setIsError({ error: true, message: "No result found!" });
    } else {
      setResult(searchedMovies.result);
      setIsError(false);
    }
  }, [searchedMovies]);

  return (
    <main>
      <div className="main-container">
        <Sidebar />
        <Hero />
        <Genre genereResults={genereResults} />
        {(isLoading || genreLoading) && <Loading />}

        {isError.error && <h2>{isError.message}</h2>}
        <Cards datas={result} />
      </div>
    </main>
  );
}

export default Home;
