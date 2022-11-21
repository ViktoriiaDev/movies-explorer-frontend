import React, { useState, useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { NotificationContext } from "../../contexts/NotificationContext/NotificationContext";
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

  React.useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((result) => {
        setSavedMovies(result);
        const savedFilterFilms = localStorage.getItem("savedFilterFilms");
        if (savedFilterFilms) {
          const likedFilms = JSON.parse(savedFilterFilms).map((movie) => {
            const findMovie = result.find(
              ({ movieId, _id }) => movieId === movie.id
            );
            if (findMovie) {
              movie.isSaved = true;
              movie._id = findMovie._id;
            }
            return movie;
          });
          setMovies(likedFilms);
        }
        const savedFilmName = localStorage.getItem("savedFilmName");
        const savedShortFilm = localStorage.getItem("savedShortFilm");
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

  React.useEffect(() => {}, []);

  useEffect(() => {
    const width = window.innerWidth;

    if (width <= 768) {
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
  }, []);

  const handleMoreClick = () => {
    setDisplayCounter(displayCounter + increase);
  };

  const fetchFilms = ({ filmName, shortFilm }) => {
    if (filmName === "") {
      handleAddNote("Нужно ввести ключевое слово");
      return;
    }
    setError(false);
    setLoading(true);
    moviesApi
      .getMovies()
      .then((result) => {
        const nameFilms = result.filter(
          (film) =>
            film.nameRU.toLowerCase().includes(filmName.toLowerCase()) ||
            film.nameEN.toLowerCase().includes(filmName.toLowerCase())
        );
        const durationFilms = nameFilms.filter((film) =>
          shortFilm ? film.duration <= 40 : film
        );
        setLoading(false);
        const likedFilms = durationFilms.map((film) => {
          const findFilm = savedMovies.find(
            (movie) => movie.movieId === film.id
          );
          if (findFilm) {
            film.isSaved = true;
            film._id = findFilm._id;
          } else {
            film.isSaved = false;
          }

          return film;
        });
        setMovies(likedFilms);

        localStorage.setItem("savedFilterFilms", JSON.stringify(likedFilms));
        localStorage.setItem("savedFilmName", filmName);
        localStorage.setItem("savedShortFilm", shortFilm);
      })
      .catch((error) => {
        setLoading(false);
        setMovies(null);
        setError(true);
        console.log(error);
        handleAddNote(error.message);
      });
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

  return (
    <div className="movies">
      {values && <SearchForm onSubmit={fetchFilms} values={values} />}
      <div className="movies__divider" />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {movies && movies.length > 0 && (
            <MoviesCardList>
              {movies.slice(0, displayCounter).map((movie) => {
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
          {movies && movies.length === 0 && (
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
          {movies && displayCounter < movies.length && (
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
