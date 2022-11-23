import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { mainApi } from "../../utils/MainApi";
import { NotificationContext } from "../../contexts/NotificationContext/NotificationContext";
import { validateEmail } from "../../utils/validateEmail"

import "./Register.css";

const Register = ({ setLoggedIn, fetchUser }) => {
  const { handleAddNote } = useContext(NotificationContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await mainApi.singup(values);
      await mainApi.singin(values);
      fetchUser();
      setLoggedIn(true);
      push("/movies");
    } catch (error) {
      handleAddNote(error.message);
    }
  };

  return (
    <section className="register">
      <div className="register__greeting">
        <Link to={"/"}>
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </Link>
        <h1 className="register__greeting-title">Добро пожаловать!</h1>
      </div>
      <form onSubmit={onSubmit} className="register__form">
        <Input
          onChange={changeField("name")}
          name={"name"}
          title={"Имя"}
          error={errors.name}
          minLength={2}
          maxLength={30}
        />
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
        <div className="register__button">
          <Button disabled={!isValidForm}>Зарегистрироваться</Button>
        </div>
      </form>
      <div className="register__add-info">
        <p className="register__add-text">Уже зарегистрированы?</p>
        <a className="register__add-link" href="/signin">
          Войти
        </a>
      </div>
    </section>
  );
};

export default Register;
