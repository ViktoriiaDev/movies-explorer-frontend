import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";
import { NotificationContext } from "../../contexts/NotificationContext/NotificationContext";
import "./Profile.css";

const Profile = ({ setСurrentUser, setLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const { handleAddNote } = useContext(NotificationContext);
  const { push } = useHistory();
  const [values, setValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const isValidForm =
    Object.values(values).every(Boolean) &&
    !Object.values(errors).some(Boolean) &&
    (values.name !== currentUser.name ||
    values.email !== currentUser.email);

  const changeField = (fieldName) => (e) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: e.target.validationMessage,
    }));
    setValues((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value,
    }));
  };

  function onSubmit(e) {
    e.preventDefault();
    mainApi
      .sendUserInfo(values)
      .then((res) => {
        setСurrentUser(res);
        handleAddNote("Данные профиля успешно обновлены");
      })
      .catch((error) => {
        handleAddNote(error.message);
        console.log(error);
      });
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    push("/signin");
  };

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <div className="profile__edit">
        <form onSubmit={onSubmit} className="profile__edit-form">
          <fieldset className="profile__edit-field">
            <label className="profile__edit-label" htmlFor="name">
              Имя
            </label>
            <input
              name="name"
              type="name"
              onChange={changeField("name")}
              className="profile__edit-input"
              minLength="2"
              maxLength="30"
              value={values.name}
              required
            />
          </fieldset>
          <p className="input__error">{errors.name}</p>
          <div className="profile__divider" />
          <fieldset className="profile__edit-field">
            <label className="profile__edit-label" htmlFor="email">
              E-mail
            </label>
            <input
              name="email"
              type="email"
              onChange={changeField("email")}
              className="profile__edit-input"
              error={errors.password}
              minLength="8"
              maxLength="30"
              value={values.email}
              required
            />
          </fieldset>
          <p className="input__error">{errors.email}</p>
          <button
            disabled={!isValidForm}
            type="submit"
            className={`profile__edit-submit ${
              !isValidForm ? "profile__edit-submit_disabled" : ""
            }`}
          >
            Редактировать
          </button>
        </form>
      </div>
      <Link to="/">
        <button
          onClick={handleLogout}
          type="button"
          className="profile__logout-button"
        >
          Выйти из аккаунта
        </button>
      </Link>
    </section>
  );
};

export default Profile;
