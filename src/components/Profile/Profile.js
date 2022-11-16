import React from "react";
import { Link, useHistory } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";

import "./Profile.css";

const Profile = ({setСurrentUser}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setDescription] = React.useState(currentUser.email);
  const { push } = useHistory();

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setDescription(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    mainApi.sendUserInfo({
      name,
      email,
    })
    .then((res) => {
      setСurrentUser(res)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    push('/signin');
  }

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
              value={name}
              onChange={handleChangeName}
              className="profile__edit-input"
            />
          </fieldset>
          <div className="profile__divider" />
          <fieldset className="profile__edit-field">
            <label className="profile__edit-label" htmlFor="email">
              E-mail
            </label>
            <input
              name="email"
              value={email}
              onChange={handleChangeEmail}
              className="profile__edit-input"
            />
          </fieldset>
          <button type="submit" className="profile__edit-submit">
            Редактировать
          </button>
        </form>
      </div>
      <Link to="/">
        <button onClick={handleLogout} type="button" className="profile__logout-button">
          Выйти из аккаунта
        </button>
      </Link>
    </section>
  );
};

export default Profile;
