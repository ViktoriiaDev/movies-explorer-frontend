import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { moviesApi } from "../../utils/MoviesApi";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    moviesApi
      .getMovies()
      .then((result) => {
        setMovies(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="movies">
      <SearchForm />
      <div className="movies__divider" />
      {/* <Preloader/> */}
      <MoviesCardList>
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              filmName={movie.nameRU}
              duration={movie.duration}
              imgUrl={`https://api.nomoreparties.co${movie.image.url}`}
              isSaved={false}
            />
          );
        })}
      </MoviesCardList>
      <button className="movies__button-more" type="button">
        Ещё
      </button>
    </div>
  );
};

export default Movies;
