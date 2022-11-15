import React from "react";
import "./MoviesCardList.css";

const MoviesCardList = ({ children }) => {
  return <ul className="movies-card-list">{children}</ul>;
};

export default MoviesCardList;
