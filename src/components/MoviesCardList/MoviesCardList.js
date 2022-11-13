import React from "react";
import "./MoviesCardList.css";

const MoviesCardList = ({ children }) => {
  return <div className="movies-card-list">{children}</div>;
};

export default MoviesCardList;
