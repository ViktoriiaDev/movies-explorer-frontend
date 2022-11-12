import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Login.css";

const Login = () => {
  return (
    <section className="login">
      <div className="login__greeting">
        <Link to={"/"}>
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </Link>
        <h1 className="login__greeting-title">Рады видеть!</h1>
      </div>
      <form className="login__form">
        <Input name={"name"} title={"E-mail"} />
        <Input
          name={"name"}
          title={"Пароль"}
          error={"Что-то пошло не так..."}
          type={"password"}
        />
        <div className="login__button">
          <Button>Войти</Button>
        </div>
      </form>
      <div className="login__add-info">
        <p className="login__add-text">Ещё не зарегистрированы?</p>
        <a className="login__add-link" href="/signup">
          Регистрация
        </a>
      </div>
    </section>
  );
};

export default Login;
