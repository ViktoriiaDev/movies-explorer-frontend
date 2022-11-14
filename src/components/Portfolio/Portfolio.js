import React from "react";
import "./Portfolio.css";
import portfolioIcon from "../../images/portfolio-icon.svg";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__link-list">
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://viktoriiadev.github.io/how-to-learn/"
            >
              <h3 className="portfolio__link-title">Статичный сайт</h3>
              <img
                className="portfolio__link-icon"
                src={portfolioIcon}
                alt="Стрелочка"
              />
            </a>
          </li>
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://viktoriiadev.github.io/russian-travel/index.html"
            >
              <h3 className="portfolio__link-title">Адаптивный сайт</h3>
              <img
                className="portfolio__link-icon"
                src={portfolioIcon}
                alt="Стрелочка"
              />
            </a>
          </li>
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/ViktoriiaDev/mesto"
            >
              <h3 className="portfolio__link-title">
                Одностраничное приложение
              </h3>
              <img
                className="portfolio__link-icon"
                src={portfolioIcon}
                alt="Стрелочка"
              />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
