import React from "react";
import "./MovieDetail.scss";

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail__container">
      {/* Header */}
      <div className="movie-detail__header">
        <h2 className="movie-detail__title">{movie.Title}</h2>
        <span className="movie-detail__year">({movie.Year})</span>
      </div>

      <div className="movie-detail__content">
        {/* Image */}
        <div className="movie-detail__image-holder">
          <img
            className="movie-detail__image"
            src={movie.Poster}
            alt={movie.Title}
            title={movie.Title}
          />
        </div>

        {/* Details */}
        <div className="movie-detail__details">
          {movie.Director !== "N/A" && (
            <div className="movie-detail__details-item">
              <b>Director:</b> <span>{movie.Director}</span>
            </div>
          )}

          {movie.Writer !== "N/A" && (
            <div className="movie-detail__details-item">
              <b>Writer(s):</b> <span>{movie.Writer}</span>
            </div>
          )}

          <div className="movie-detail__details-item">
            <b>Starring:</b> <span>{movie.Actors}</span>
          </div>

          <div className="movie-detail__details-item">
            <b>Genre:</b> <span>{movie.Genre}</span>
          </div>

          <div className="movie-detail__details-item">
            <b>Premiere Date:</b> <span>{movie.Released}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="movie-detail__description">
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
