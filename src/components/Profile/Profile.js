import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виктория!</h1>
      <div className="profile__edit">
        <form className="profile__edit-form">
          <fieldset className="profile__edit-field">
            <label className="profile__edit-label" htmlFor="name">
              Имя
            </label>
            <input name="name" className="profile__edit-input" />
          </fieldset>
          <div className="profile__divider" />
          <fieldset className="profile__edit-field">
            <label className="profile__edit-label" htmlFor="email">
              E-mail
            </label>
            <input name="email" className="profile__edit-input" />
          </fieldset>
          <button type="submit" className="profile__edit-submit">
            Редактировать
          </button>
        </form>
      </div>
      <Link to="/">
        <button type="button" className="profile__logout-button">
          Выйти из аккаунта
        </button>
      </Link>
    </section>
  );
};

export default Profile;
