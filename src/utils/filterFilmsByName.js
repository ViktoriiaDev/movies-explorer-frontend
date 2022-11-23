export const filterFilmsByName = ({ array, filmName }) => {
  const filterFilms = array.filter(
    (film) =>
      film.nameRU.toLowerCase().includes(filmName.toLowerCase()) ||
      film.nameEN.toLowerCase().includes(filmName.toLowerCase())
  );
  return filterFilms;
}