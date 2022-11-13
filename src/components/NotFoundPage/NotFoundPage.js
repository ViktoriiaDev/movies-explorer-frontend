import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const { goBack } = useHistory();
  return (
    <>
      <section className="not-found-page">
        <h1 className="not-found-page__title">404</h1>
        <h2 className="not-found-page__subtitle">Страница не найдена</h2>
        <button onClick={goBack} className="not-found-page__back-button">
          Назад
        </button>
      </section>
    </>
  );
};

export default NotFoundPage;
