import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import searchIcon from "../../images/search-icon.svg";
import "./SearchForm.css";

const SearchForm = ({ onSubmit, values: initValues }) => {
  const [values, setValues] = useState(
    initValues || {
      filmName: "",
      shortFilm: false,
    }
  );

  const changeField = (fieldName) => (e) => {
    setValues((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value,
    }));
  };

  const changeCheckbox = (value) => {
    setValues((prevState) => ({
      ...prevState,
      shortFilm: value,
    }));
  };

  const hamdleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <>
      <form className="search-form" onSubmit={hamdleSubmitForm}>
        <input
          onChange={changeField("filmName")}
          value={values.filmName}
          name={"filmName"}
          className="search-form__input"
          placeholder="Фильм"
        />
        <button className="search-form__button" type="submit">
          <img
            className="search-form__button-icon"
            alt="Поиск"
            src={searchIcon}
          />
        </button>
      </form>
      <FilterCheckbox onChange={changeCheckbox} initValue={values.shortFilm}/>
    </>
  );
};

export default SearchForm;
