const baseUrl = 'https://api.nomoreparties.co';

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  async _getResponseData(res) {
    if (res.ok) {
      const result = await res.json();
      return result;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: {
        ...this._headers,
      },
    }).then(this._getResponseData);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});