import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        className="navigation__link"
        activeClassName="navigation__link_active"
        to={"/movies"}
      >
        Фильмы
      </NavLink>
      <NavLink
        className="navigation__link"
        activeClassName="navigation__link_active"
        to={"/saved-movies"}
      >
        Сохраненные фильмы
      </NavLink>
    </nav>
  );
};

export default Navigation;
