import React from "react";
import deleteIcon from "../../images/delete-icon.svg";
import "./MoviesCard.css";

const MoviesCard = ({ filmName, duration, imgUrl, isSaved, isDisplayDeleteButton }) => {
  return (
    <div className="movies-card">
      <div className="movies-card__image-container">
        <img
          className="movies-card__image"
          src={imgUrl}
          alt="Постер фильма"
        ></img>
      </div>
      <div className="movies-card__info">
        <div className="movies-card__description">
          <h3 className="movies-card__film-name">{filmName}</h3>
          <h4 className="movies-card__duration">{duration}</h4>
        </div>
        {isDisplayDeleteButton ? (
          <button className="movies-card__delete-button">
            <img className="movies-card__delete-button-icon" src={deleteIcon} alt="Крестик"/>
          </button>
        ) : (
        <button
          className={`movies-card__favorite-button ${
            isSaved ? "movies-card__favorite-button_active" : ""
          }`}
        ></button>)}
      </div>
    </div>
  );
};

export default MoviesCard;
