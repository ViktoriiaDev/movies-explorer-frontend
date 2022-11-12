import React from "react";
import "./Portfolio.css";
import portfolioIcon from "../../images/portfolio-icon.svg";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__links">
          <a className="portfolio__link" href="/">
            <h3 className="portfolio__link-title" >
              Статичный сайт
            </h3>
            <img
              className="portfolio__link-icon"
              src={portfolioIcon}
              alt="Стрелочка"
            />
          </a>
          <a className="portfolio__link" href="/">
            <h3 className="portfolio__link-title">
              Адаптивный сайт
            </h3>
            <img
              className="portfolio__link-icon"
              src={portfolioIcon}
              alt="Стрелочка"
            />
          </a>
          <a className="portfolio__link" href="/">
            <h3 className="portfolio__link-title">
              Одностраничное приложение
            </h3>
            <img
              className="portfolio__link-icon"
              src={portfolioIcon}
              alt="Стрелочка"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
