import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Account from "../Account/Account";
import closeIcon from "../../images/delete-icon.svg";
import "./MobileNavigation.css";

const MobileNavigation = ({ closeMobileNavigation }) => {
  const [isFirstRender, setFirstRender] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isFirstRender) {
      closeMobileNavigation();
    }
    setFirstRender(false);
  }, [closeMobileNavigation, pathname]);
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__cover"></div>
      <div className="mobile-menu__content">
        <button
          onClick={closeMobileNavigation}
          className="mobile-menu__close-button"
        >
          <img
            className="mobile-menu__close-button-icon"
            src={closeIcon}
            alt="Крестик"
          />
        </button>
        <nav className="mobile-menu__navigation">
          <NavLink
            className="mobile-menu__navigation-link"
            activeClassName="mobile-menu__navigation-link_active"
            exact
            to={"/"}
          >
            Главная
          </NavLink>
          <NavLink
            className="mobile-menu__navigation-link"
            activeClassName="mobile-menu__navigation-link_active"
            to={"/movies"}
          >
            Фильмы
          </NavLink>
          <NavLink
            className="mobile-menu__navigation-link"
            activeClassName="mobile-menu__navigation-link_active"
            to={"/saved-movies"}
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <div className="mobile-menu__account">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
