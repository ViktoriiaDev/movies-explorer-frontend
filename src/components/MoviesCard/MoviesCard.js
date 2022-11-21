import React from "react";
import deleteIcon from "../../images/delete-icon.svg";
import "./MoviesCard.css";

const MoviesCard = ({
  trailerLink,
  filmName,
  duration,
  imgUrl,
  isSaved,
  isDisplayDeleteButton,
  handleAddMovie,
  handleDeleteMovie,
  handleDeleteLike,
}) => {
  const getTime = () => {
    let hours = Math.trunc(duration / 60);
    let minutes = duration % 60;
    if (hours === 0) {
      return minutes + "м";
    }
    else {
      return hours + "ч " + minutes + "м";
    }
  };

  const filmDuration = getTime(duration);

  return (
    <li className="movies-card">
      <a href={trailerLink} target="_blank"
              rel="noreferrer noopener">
        <div className="movies-card__image-container">
        <img
          className="movies-card__image"
          src={imgUrl}
          alt="Постер фильма"

        ></img>
      </div>
      </a>
      <div className="movies-card__info">
        <div className="movies-card__description">
          <h3 className="movies-card__film-name">{filmName}</h3>
          <h4 className="movies-card__duration">{filmDuration}</h4>
        </div>
        {isDisplayDeleteButton ? (
          <button className="movies-card__delete-button">
            <img
              className="movies-card__delete-button-icon"
              type="button"
              onClick={handleDeleteMovie}
              src={deleteIcon}
              alt="Крестик"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={isSaved ? handleDeleteLike : handleAddMovie}
            className={`movies-card__favorite-button ${
              isSaved ? "movies-card__favorite-button_active" : ""
            }`}
          ></button>
        )}
      </div>
    </li>
  );
};

export default MoviesCard;
