import React from "react";
import {Rate} from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rater = ({ movieRating, isMovieRating, Rating, setRating }) => {

  const handleChange = (value) => {
    setRating(value);
  };
  return isMovieRating ? (
    <span>
      <Rate disabled value={movieRating} />
    </span>
  ) : (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={Rating} />
    </span>
  );
};
export default Rater;
