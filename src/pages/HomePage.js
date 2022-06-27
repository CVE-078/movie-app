import React, { useState } from "react";
import axios from "axios";

import SearchForm from "./../components/SearchForm";
import MovieList from "./../components/MovieList";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    let data = [];

    // Fetch movies from API
    axios
      .get(`${process.env.REACT_APP_OMDB_BASE_URL}&s=${query}`)
      .then((response) => {
        if (response.data.Search) data = response.data.Search;

        // Order movies by year
        data = data.sort((a, b) => a.Year - b.Year);

        setMovies(data);
      });
  };

  // Clear query and movies state
  const clearQuery = () => {
    setQuery("");
    setMovies([]);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchForm
        fetchMovies={fetchMovies}
        handleInputChange={handleInputChange}
        clearQuery={clearQuery}
        query={query}
      />

      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
