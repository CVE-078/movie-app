import React from "react";
import "./SearchForm.scss";

const SearchForm = ({ fetchMovies, handleInputChange, clearQuery, query }) => {
  return (
    <div className="search-form">
      <div className="search-form__wrapper">
        <input
          type="text"
          className="search-form__input"
          placeholder="Search for a movie"
          value={query}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && fetchMovies()}
        />

        {/* Show clickable 'x' to clear current search query */}
        {query.length > 0 && (
          <span onClick={clearQuery} class="search-form__clear-icon">
            x
          </span>
        )}
      </div>

      <button
        className="search-form__button"
        type="submit"
        onClick={fetchMovies}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
