import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <>
      <section className="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__divider"></div>
        <div className="about-project__info">
          <div className="about-project__steps">
            <h3 className="about-project__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__weeks">
            <h3 className="about-project__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__progress-bar">
          <div className="about-project__progress-bar-backend">
            1 неделя
            <div className="about-project__progress-bar-backend-label">
                Back-end
              </div>
          </div>

          <div className="about-project__progress-bar-frontend">
            4 недели
            <div className="about-project__progress-bar-frontend-label">
            Front-end
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProject;
