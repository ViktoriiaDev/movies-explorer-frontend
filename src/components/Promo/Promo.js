import React from "react";
import promoLogo from "../../images/promo-logo.svg";

import "./Promo.css";

const Promo = () => {
  return (
    <>
      <section className="promo">
        <div className="promo__info">
          <h1 className="promo__info-title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <h2 className="promo__info-subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </h2>
          <button className="promo__info-button" type="button">
            Узнать больше
          </button>
        </div>
        <img className="promo__logo" src={promoLogo} alt="Карандаш" />
      </section>
    </>
  );
};

export default Promo;
