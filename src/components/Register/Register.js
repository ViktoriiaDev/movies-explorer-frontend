import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Register.css";
import { mainApi } from "../../utils/MainApi";


const Register = () => {

  const [values, setValues] = useState({
    email: '',
    name: '',
    password: ''
  })

  const { push } = useHistory();

  // const [tooltipState, setTooltipState] = React.useState({
  //   isOpen: false,
  //   isSuccess: false
  // })

  const changeField = (fieldName) => (e) => {
    setValues(prevState => ({
      ...prevState,
      [fieldName]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    mainApi.singup(values)
    .then((res) => {
      if (res) {
        alert('Вы зарегистрированы')
        push("/signin");
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <section className="register">
      <div className="register__greeting">
        <Link to={"/"}>
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </Link>
        <h1 className="register__greeting-title">Добро пожаловать!</h1>
      </div>
      <form onSubmit={onSubmit} className="register__form">
        <Input onChange={changeField("name")} name={"name"} title={"Имя"} />
        <Input onChange={changeField("email")} name={"email"} title={"E-mail"} />
        <Input onChange={changeField("password")}
          name={"password"}
          title={"Пароль"}
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
