import React from "react";
import MoviesCarousel from "./MoviesCarousel/MoviesCarousel";
import MoviesText from "./MoviesText";
import "./movies.scss";

const Movies = () => {
  return (
    <div className="movies">
      <h2>Movies</h2>
      <div className="movies__content">
        <MoviesText />
        <MoviesCarousel />
      </div>
    </div>
  );
};

export default Movies;
