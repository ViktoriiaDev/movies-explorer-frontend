import React from "react";
import "./AboutMe.css";
import myFoto from "../../images/empty-foto.jpg";

const AboutMe = () => {
  return (
    <>
      <section className="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__divider"></div>
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__info-title">Виктория</h3>
            <h4 className="about-me__info-subtitle">
              Фронтенд-разработчик,{" "}
              {new Date().getFullYear() - new Date("09-02-1992").getFullYear()}{" "}
              лет
            </h4>
            <p className="about-me__info-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              sequi alias facilis eligendi magnam illo tempora sit provident
              facere corrupti laudantium molestias, quibusdam neque excepturi
              quas est dolor quisquam perspiciatis rerum quo porro earum
              voluptates? Fugit beatae maxime laboriosam reprehenderit
              praesentium quo perspiciatis ducimus unde.
            </p>
            <a
              className="about-me__info-link"
              href="https://github.com/ViktoriiaDev"
            >
              Github
            </a>
          </div>
          <div className="about-me__info-right">
            <img className="about-me__info-foto" src={myFoto} alt="Фото" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
