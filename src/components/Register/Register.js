import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Register.css";

const Register = () => {
  return (
    <section className="register">
      <div className="register__greeting">
        <Link to={"/"}>
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </Link>
        <h1 className="register__greeting-title">Добро пожаловать!</h1>
      </div>
      <form className="register__form">
        <Input name={"name"} title={"Имя"} />
        <Input name={"name"} title={"E-mail"} />
        <Input
          name={"name"}
          title={"Пароль"}
          error={"Что-то пошло не так..."}
          type={"password"}
        />
        <div className="register__button">
          <Button>Зарегистрироваться</Button>
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
