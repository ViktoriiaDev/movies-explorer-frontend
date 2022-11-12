import React from "react";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./SavedMovies.css";

const SavedMovies = () => {
  return (
    <div className="saved-movies">
      <SearchForm />
      <div className="movies__divider" />
      {/* <Preloader/> */}
      <MoviesCardList>
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t4.ftcdn.net/jpg/03/78/82/67/240_F_378826792_Al5LMh7Zi2nbxgTQv5kZad8rZiTeW1gW.jpg"
          }
          isSaved={true}
          isDisplayDeleteButton={true}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t3.ftcdn.net/jpg/04/77/31/12/240_F_477311239_KUjgs0zlrL9ilCpCkPo2fYZB9AehFF48.jpg"
          }
          isSaved={true}
          isDisplayDeleteButton={true}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t3.ftcdn.net/jpg/04/02/19/28/240_F_402192887_UeLVHA5bc6tlK0B3TSKeDGw7sWHsECjY.jpg"
          }
          isSaved={true}
          isDisplayDeleteButton={true}
        />

      </MoviesCardList>
    </div>
  );
};

export default SavedMovies;
