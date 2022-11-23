import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({loggedIn}) => {
  const { pathname } = useLocation();
  const isMainPage = "/" === pathname;

  return (
    <nav className="navigation">
      <NavLink
        className={`navigation__link ${loggedIn && isMainPage ? "navigation__link-logged-in" : ""}`}
        activeClassName="navigation__link_active"
        to={"/movies"}
      >
        Фильмы
      </NavLink>
      <NavLink
        className={`navigation__link ${loggedIn  && isMainPage ? "navigation__link-logged-in" : ""}`}
        activeClassName="navigation__link_active"
        to={"/saved-movies"}
      >
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
};

export default Navigation;
