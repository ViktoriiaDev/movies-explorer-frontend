import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./Movies.css";

const Movies = () => {
  return (
    <div className="movies">
      <SearchForm />
      <div className="movies__divider" />
      {/* <Preloader/> */}
      <MoviesCardList>
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://as2.ftcdn.net/v2/jpg/03/39/23/47/1000_F_339234706_21TQjNdxInSbus2yRsH686CATZlTFU17.jpg"
          }
          isSaved={false}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t4.ftcdn.net/jpg/03/78/82/67/240_F_378826792_Al5LMh7Zi2nbxgTQv5kZad8rZiTeW1gW.jpg"
          }
          isSaved={true}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t4.ftcdn.net/jpg/04/09/02/35/240_F_409023585_FxHsCOoj3X6hg2Z9qyBwGdHzlaW7eMyk.jpg"
          }
          isSaved={false}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t4.ftcdn.net/jpg/02/93/15/99/240_F_293159971_wzSIU0gwzBtmRCwZzSzudQ9wuCG1UxzH.jpg"
          }
          isSaved={false}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t3.ftcdn.net/jpg/04/77/31/12/240_F_477311239_KUjgs0zlrL9ilCpCkPo2fYZB9AehFF48.jpg"
          }
          isSaved={true}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t3.ftcdn.net/jpg/03/40/12/74/240_F_340127448_gfQYP5nCoaEIRsrMxqA98SZoOPjP7DHe.jpg"
          }
          isSaved={false}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t4.ftcdn.net/jpg/02/67/68/45/240_F_267684533_G7THd7vyInpTBpuTfydTpuZD05kLowJv.jpg"
          }
          isSaved={false}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t3.ftcdn.net/jpg/04/02/19/28/240_F_402192887_UeLVHA5bc6tlK0B3TSKeDGw7sWHsECjY.jpg"
          }
          isSaved={true}
        />
        <MoviesCard
          filmName={"33 слова о дизайне"}
          duration={"1ч42м"}
          imgUrl={
            "https://t3.ftcdn.net/jpg/03/04/47/82/240_F_304478259_mXWEe8n6Okd5uVjNZZRq4e3w2UfQqnLS.jpg"
          }
          isSaved={false}
        />
      </MoviesCardList>
      <button className="movies__button-more" type="button">Ещё</button>
    </div>
  );
};

export default Movies;
