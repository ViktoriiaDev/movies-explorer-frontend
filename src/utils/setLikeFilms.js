export const setLikeFilms = ({ filmsArray, likedFilmsArray }) => {
  const resultArray = filmsArray.map((film) => {
    const findFilm = likedFilmsArray.find((movie) => movie.movieId === film.id);
    if (findFilm) {
      film.isSaved = true;
      film._id = findFilm._id;
    } else {
      film.isSaved = false;
    }

    return film;
  });
  return resultArray;
};
