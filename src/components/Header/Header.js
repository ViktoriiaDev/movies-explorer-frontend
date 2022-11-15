import React from "react";
import { useLocation, Link } from "react-router-dom";
import headerLogo from "../../images/header-logo.svg";
import menuMobileIcon from "../../images/menu-mobile.svg";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import "./Header.css";

const Header = ({ openMobileNavigation }) => {
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
          <div className="header__desktop">
            <Navigation />
            <Account />
          </div>
          <div className="header__mobile">
            <button
              onClick={openMobileNavigation}
              className="header__menu-mobile"
              type="button"
            >
              <img src={menuMobileIcon} alt="Меню" />
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
