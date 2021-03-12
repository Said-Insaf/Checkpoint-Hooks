import React from "react";
import { Card } from "react-bootstrap";
import MovieRating from "../Rating/Rating";
import ModalAddMovie from "../ModalAddMovie/ModalAddMovie";

function MovieCard({ movie, isaddMovie, addMovie }) {
  console.log(movie);
  return isaddMovie ? (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <ModalAddMovie addMovie={addMovie} />
      </Card.Body>
    </Card>
  ) : (
    <Card style={{ width: "18rem", margin: "2%" }}>
      <Card.Img variant="top" src={movie.img} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <MovieRating movieRating={movie.rating} isMovieRating={true} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
  
}
export default MovieCard;
