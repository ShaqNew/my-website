import React from "react";

const MovieCard = (props: any) => {
  const { movie } = props;

  return (
    <div className="movieCard" data-testid="movie-card">
      {/* TODO: Limit the char size of the title */}
      <h2 className="movieCard__title">{movie.title}</h2>
      {typeof movie.poster === "string" ? (
        <img
          className="movieCard__poster"
          src={movie.poster}
          alt={movie.title}
        ></img>
      ) : (
        movie.poster
      )}
      <div className="movieCard__rating">{movie.myRating}</div>
    </div>
  );
};

export default MovieCard;
