import React, { useContext } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Cards from "../components/Cards/Cards";
import { MovieContext } from "../context/movieContext";

const WishList = () => {
  const { savedMovies } = useContext(MovieContext);

  const styles = {
    textTransform: "uppercase",
    textAlign: "center",
    position: "absolute",
    top: "30%",
    left: "52%",
    transform: "translateX(-50%)",
  };

  return (
    <main>
      <Sidebar />
      {savedMovies.length > 0 ? (
        <Cards datas={savedMovies} />
      ) : (
        <h2 className="empty" style={styles}>
          Empty WishList.
        </h2>
      )}
    </main>
  );
};

export default WishList;
