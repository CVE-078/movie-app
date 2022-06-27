import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.scss";

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <Link to={`movie/${movie.imdbID}`}>
        <img
          className="movie-item__image"
          src={movie.Poster}
          alt={`${movie.Title} (${movie.Year})`}
          title={`${movie.Title} (${movie.Year})`}
        />
      </Link>
    </div>
  );
};

export default MovieItem;
