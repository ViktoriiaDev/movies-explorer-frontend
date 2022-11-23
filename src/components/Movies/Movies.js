import React, { useState, useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { NotificationContext } from "../../contexts/NotificationContext/NotificationContext";
import { filterFilmsByName } from "../../utils/filterFilmsByName";
import { setLikeFilms } from "../../utils/setLikeFilms";

import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const { handleAddNote } = useContext(NotificationContext);
  const [isLoading, setLoading] = useState(false);
  const [values, setValues] = useState(null);
  const [isError, setError] = useState(false);
  const [displayCounter, setDisplayCounter] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((result) => {
        setSavedMovies(result);
        const allFilms = localStorage.getItem("allFilms");
        const savedFilmName = localStorage.getItem("savedFilmName");
        const savedShortFilm = localStorage.getItem("savedShortFilm");
        if (allFilms) {
          let filmsList = JSON.parse(allFilms).map((movie) => {
            const findMovie = result.find(
              ({ movieId, _id }) => movieId === movie.id
            );
            if (findMovie) {
              movie.isSaved = true;
              movie._id = findMovie._id;
            }
            return movie;
          });
          filmsList = filterFilmsByName({
            array: filmsList,
            filmName: savedFilmName
          })

          setMovies(filmsList);
        }

        setValues({
          filmName: savedFilmName || "",
          shortFilm: JSON.parse(savedShortFilm) || false,
        });
      })
      .catch((error) => {
        handleAddNote(error.message);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeMoviesList);
    resizeMoviesList();
    return () => {
      window.removeEventListener("resize", resizeMoviesList);
    };
  }, []);

  const resizeMoviesList = () => {
    const width = window.innerWidth;
    if (width < 769) {
      setDisplayCounter(8);
      setIncrease(2);
      return;
    }

    if (width <= 480) {
      setDisplayCounter(5);
      setIncrease(2);
      return;
    }

    setDisplayCounter(12);
    setIncrease(4);
  };

  const handleMoreClick = () => {
    setDisplayCounter(displayCounter + increase);
  };

  const fetchFilms = ({ filmName }) => {
    if (filmName === "") {
      handleAddNote("Нужно ввести ключевое слово");
      return;
    }

    localStorage.setItem("savedFilmName", filmName);

    const allFilms = localStorage.getItem("allFilms");

    if (allFilms) {
      const filterFilms = filterFilmsByName({
        array: JSON.parse(allFilms),
        filmName: filmName,
      });
      const likedFilms = setLikeFilms({
        filmsArray: filterFilms,
        likedFilmsArray: savedMovies,
      });
      setMovies(likedFilms);
    } else {
      setError(false);
      setLoading(true);
      moviesApi
        .getMovies()
        .then((result) => {
          localStorage.setItem("allFilms", JSON.stringify(result));

          const filterFilms = filterFilmsByName({
            array: result,
            filmName: filmName,
          });

          const likedFilms = setLikeFilms({
            filmsArray: filterFilms,
            likedFilmsArray: savedMovies,
          });
          setLoading(false);
          setMovies(likedFilms);
        })
        .catch((error) => {
          setLoading(false);
          setMovies(null);
          setError(true);
          console.log(error);
          handleAddNote(error.message);
        });
    }
  };

  const filterCheckBox = (value) => {
    setValues((prev) => ({
      ...prev,
      shortFilm: value,
    }));
    localStorage.setItem("savedShortFilm", value);
  };

  const handleDeleteLike = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.map((film) =>
            film._id === movie._id
              ? {
                  ...film,
                  isSaved: false,
                }
              : film
          )
        );
      })
      .catch((error) => {
        handleAddNote(error.message);
        console.log(error);
      });
  };

  const handleAddMovie = ({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
  }) => {
    const movie = {
      id,
      country,
      director,
      duration,
      year,
      description,
      image: `https://api.nomoreparties.co${image.url}`,
      trailerLink,
      thumbnail: `https://api.nomoreparties.co${image.url}`,
      movieId: id,
      nameRU,
      nameEN,
    };
    mainApi
      .addMovie(movie)
      .then((saved) => {
        setMovies((prevMovies) =>
          prevMovies.map((item) =>
            item.id === movie.movieId
              ? {
                  ...item,
                  isSaved: true,
                  _id: saved._id,
                }
              : item
          )
        );
      })
      .catch((error) => {
        handleAddNote(error.message);
        console.log(error);
      });
  };

  const resultFilms = movies && movies.filter((film) =>
    values.shortFilm ? film.duration <= 40 : film
  );

  return (
    <div className="movies">
      {values && (
        <SearchForm
          onSubmit={fetchFilms}
          values={values}
          filterCheckBox={filterCheckBox}
        />
      )}
      <div className="movies__divider" />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {movies && movies.length > 0 && (
            <MoviesCardList>
              {resultFilms.slice(0, displayCounter).map((movie) => {
                return (
                  <MoviesCard
                    trailerLink={movie.trailerLink}
                    key={movie.id}
                    filmName={movie.nameRU}
                    duration={movie.duration}
                    imgUrl={`https://api.nomoreparties.co${movie.image.url}`}
                    isSaved={movie.isSaved}
                    handleAddMovie={() => handleAddMovie(movie)}
                    handleDeleteLike={() => handleDeleteLike(movie)}
                  />
                );
              })}
            </MoviesCardList>
          )}
          {resultFilms && resultFilms.length === 0 && (
            <>
              <div className="movies__not-found-error">Ничего не найдено</div>
            </>
          )}
          {isError && (
            <>
              <div className="movies__responce-error">
                Во время запроса произошла ошибка. Возможно, проблема с
                соединением или сервер недоступен. Подождите немного и
                попробуйте ещё раз.
              </div>
            </>
          )}
          {resultFilms && displayCounter < resultFilms.length && (
            <button
              onClick={handleMoreClick}
              className="movies__button-more"
              type="button"
            >
              Ещё
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Movies;
