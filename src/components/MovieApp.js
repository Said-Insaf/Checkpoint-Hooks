import React, { useState } from "react";
import MovieList from "./MovieList/MovieList";
import FilterByRating from "./Rating/Rating";
import movieData from "./MovieData";
import FilterByName from "./FilterByName/FilterByName";
import Footer from "./Footer/Footer";
const MovieApp = () => {
  const [movies, setmovies] = useState(movieData);
  const [inputsearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);
  const addMovie = (newMovie) => {
    setmovies([...movies, newMovie]);
  };
  return (
    <div>
      <div>
        <FilterByName setInputSearch={setInputSearch} />
        <FilterByRating
          isMovieRating={false}
          rating={rating}
          setRating={setRating}
        />
      </div>
      <MovieList
        movies={movies}
        setmovies={setmovies}
        inputsearch={inputsearch}
        rating={rating}
        setRating={setRating}
        addMovie={addMovie}
      />
      <Footer />
    </div>
  );
};

export default MovieApp;
