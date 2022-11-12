import React from "react";
import { useLocation, Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import profileIcon from "../../images/profile-icon.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  if (!["/movies", "/saved-movies", "/profile", "/"].includes(pathname)) {
    return null;
  }
  const isMainPage = "/" === pathname;

  return (
    <header className={`header ${isMainPage ? "" : "header_auth"}`}>
      <Link to={"/"}>
        <img className="header__logo" alt="Логотип" src={headerLogo} />
      </Link>
      {isMainPage ? (
        <>
          <Link className="header__signup-link" to={"/signup"}>
            Регистрация
          </Link>
          <Link className="header__signin-link" to={"/signin"}>
            Войти
          </Link>
        </>
      ) : (
        <>
          <Navigation />
          <Link className="header__profile-link" to={"/profile"}>
            Аккаунт
            <div className="header__profile-icon">
              <img alt="Логотип" src={profileIcon} />
            </div>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
