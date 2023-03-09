import React, { useState, useContext } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import { mainApi } from "../../utils/MainApi";
import { NotificationContext } from "../../contexts/NotificationContext/NotificationContext";
import "./SavedMovies.css";
import Preloader from "../Preloader/Preloader";
import { filterFilmsByName } from "../../utils/filterFilmsByName";

const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const { handleAddNote } = useContext(NotificationContext);
  const [isShort, filterCheckBox] = useState(false);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    mainApi
      .getSavedMovies()
      .then((result) => {
        setLoading(false);
        setSavedMovies(result);
      })
      .catch((error) => {
        setLoading(false);
        handleAddNote(error.message);
        console.log(error);
      });
  }, []);

  const handleDeleteMovie = (savedMovie) => {
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        setSavedMovies((prevSavedMovies) =>
          prevSavedMovies.filter((movie) => movie._id !== savedMovie._id)
        );
      })
      .catch((error) => {
        handleAddNote(error.message);
        console.log(error);
      });
  };

  const searchFilms = ({ filmName }) => {
    if (filmName === "") {
      handleAddNote("Нужно ввести ключевое слово");
      return;
    }
    setError(false);
    const nameFilms = filterFilmsByName({
      array: savedMovies,
      filmName: filmName,
    });
    setSavedMovies(nameFilms);
  };

  const resultFilms = savedMovies.filter((film) =>
    isShort ? film.duration <= 40 : film
  );

  return (
    <div className="saved-movies">
      <SearchForm
        onSubmit={searchFilms}
        filterCheckBox={filterCheckBox}
      />
      <div className="movies__divider" />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList>
            {resultFilms.map((savedMovie) => {
              return (
                <MoviesCard
                  trailerLink={savedMovie.trailerLink}
                  key={savedMovie._id}
                  filmName={savedMovie.nameRU}
                  duration={savedMovie.duration}
                  imgUrl={savedMovie.image}
                  isDisplayDeleteButton={true}
                  handleDeleteMovie={() => handleDeleteMovie(savedMovie)}
                />
              );
            })}
          </MoviesCardList>
        </>
      )}
    </div>
  );
};

export default SavedMovies;
