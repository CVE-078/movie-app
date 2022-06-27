import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MovieDetail from "../components/MovieDetail";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  // Fetch movie details from API
  const fetchMovie = (id) => {
    let data = {};

    setIsLoading(true);

    axios
      .get(`${process.env.REACT_APP_OMDB_BASE_URL}&i=${id}`)
      .then((response) => {
        if (response.data) data = response.data;

        setMovie(data);
        setIsLoading(false);
      });
  };

  // Use param id to fetch movie details on page load
  useEffect(() => {
    fetchMovie(id);
  }, [id, setMovie]);

  return (
    <div className="movie-detail">
      {isLoading && <div>Loading...</div>}

      {movie && <MovieDetail movie={movie} />}
    </div>
  );
};

export default MovieDetailPage;
