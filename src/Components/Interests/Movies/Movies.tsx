import React from "react";
import MoviesCarousel from "./MoviesCarousel";
import MoviesText from "./MoviesText";
import "./movies.scss"

// TODO: break divs up (no need to next the components in their own divs)
// use the classnames in each component to style them
// See Science.tsx

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