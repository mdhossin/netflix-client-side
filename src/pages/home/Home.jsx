import React from "react";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import MovieList from "../../components/movieList/MovieList";

import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Featured type="movie" />
      <MovieList />
      <MovieList />
      <MovieList />
    </div>
  );
};

export default Home;
