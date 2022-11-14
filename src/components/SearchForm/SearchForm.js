import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchIcon from "../../images/search-icon.svg";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <>
      <form className="search-form">
        <input className="search-form__input" placeholder="Фильм" required />
        <button className="search-form__button" type="button">
          <img
            className="search-form__button-icon"
            alt="Поиск"
            src={searchIcon}
          />
        </button>
      </form>
      <FilterCheckbox />
    </>
  );
};

export default SearchForm;
