import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, inputsearch, rating, addMovie }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(inputsearch.toUpperCase()) &&
            movie.rating >= rating
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} isaddMovie={false} />
        ))}
      <MovieCard isaddMovie={true} addMovie={addMovie} />
    </div>
  );
};

export default MovieList;
