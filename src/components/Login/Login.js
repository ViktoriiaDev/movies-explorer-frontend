import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { mainApi } from "../../utils/MainApi";
import "./Login.css";

const Login = ({ setLoggedIn, fetchUser }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { push } = useHistory();

  const changeField = (fieldName) => (e) => {
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
          onChange={changeField("email")}
          name={"email"}
          title={"E-mail"}
        />
        <Input
          onChange={changeField("password")}
          name={"password"}
          title={"Пароль"}
          type={"password"}
        />
        <div className="login__button">
          <Button>Войти</Button>
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
