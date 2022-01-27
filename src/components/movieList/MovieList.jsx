import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

import React, { useRef, useState } from "react";
import MovieListItem from "../movieListItem/MovieListItem";
import "./movieList.scss";

const MovieList = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(listRef.current.getBoundingClientRect());
  };
  return (
    <div className="movieList">
      <span className="movieList__title">Continue to watch</span>
      <div className="movieList__wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="movieList__wrapper__container" ref={listRef}>
          <MovieListItem index={0} />
          <MovieListItem index={1} />
          <MovieListItem index={2} />
          <MovieListItem index={3} />
          <MovieListItem index={4} />
          <MovieListItem index={5} />
          <MovieListItem index={6} />
          <MovieListItem index={7} />
          <MovieListItem index={8} />
          <MovieListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MovieList;
