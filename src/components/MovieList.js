import React from "react";
import MovieItem from "./MovieItem";
import "./MovieList.scss";

const MovieList = ({ movies }) => {
  return (
    // Loop through fetched movies, if no results, return message
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie, i) => <MovieItem key={i} movie={movie} />)
      ) : (
        <div className="movie-list__no-results">
          Find the movie you're looking for using the search bar above
        </div>
      )}
    </div>
  );
};

export default MovieList;
