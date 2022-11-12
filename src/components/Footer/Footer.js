import React from "react";
import { useLocation } from "react-router-dom";

import "./Footer.css";

const Footer = () => {

  const { pathname } = useLocation();

  if (!["/movies", "/saved-movies", "/"].includes(pathname)) {
    return null;
  }


  return (


    <>
      <footer className="footer">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__info">
          <div className="footer__info-copyright">&copy; 2022</div>
          <div className="footer__info-links">
            <a className="footer__info-link" href="https://practicum.yandex.ru/">
              Яндекс.Практикум
            </a>
            <a className="footer__info-link" href="https://github.com/ViktoriiaDev">
              Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
