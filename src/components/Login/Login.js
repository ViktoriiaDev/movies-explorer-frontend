import React, { useState, useContext } from "react";
import { NotificationContext } from '../../contexts/NotificationContext/NotificationContext';
import { Link, useHistory } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { mainApi } from "../../utils/MainApi";
import { validateEmail } from "../../utils/validateEmail"
import "./Login.css";

const Login = ({ setLoggedIn, fetchUser }) => {
  const { handleAddNote } = useContext(NotificationContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const isValidForm =
    Object.values(values).every(Boolean) &&
    !Object.values(errors).some(Boolean);

  const { push } = useHistory();

  const changeField = (fieldName, fnValidation = () => "") => (e) => {
    setErrors((prev) => ({
      ...prev,
      [fieldName]: e.target.validationMessage || (fnValidation(e.target.value)),
    }));
    setValues((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mainApi
      .singin(values)
      .then((res) => {
        if (res) {
          fetchUser();
          setLoggedIn(true);
          push("/movies");
        }
      })
      .catch((error) => {
        handleAddNote(error.message)
        console.log(error);
      });
  };

  return (
    <section className="login">
      <div className="login__greeting">
        <Link to={"/"}>
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </Link>
        <h1 className="login__greeting-title">Рады видеть!</h1>
      </div>
      <form onSubmit={onSubmit} className="login__form">
        <Input
          onChange={changeField("email", validateEmail)}
          name={"email"}
          type="email"
          title={"E-mail"}
          error={errors.email}
        />
        <Input
          onChange={changeField("password")}
          name={"password"}
          title={"Пароль"}
          type={"password"}
          error={errors.password}
          minLength={8}
          maxLength={30}
        />
        <div className="login__button">
          <Button disabled={!isValidForm}>Войти</Button>
        </div>
      </form>
      <div className="login__add-info">
        <p className="login__add-text">Ещё не зарегистрированы?</p>
        <Link className="login__add-link" to="/signup">
          Регистрация
        </Link>
      </div>
    </section>
  );
};

export default Login;
