const { NODE_ENV } = process.env;
const baseUrl = NODE_ENV === 'production' ? 'https://api.diploma.viktoriiadev.nomoredomains.icu' : "http://localhost:3000";

// const baseUrl = "https://api.diploma.viktoriiadev.nomoredomains.icu";

const getToken = () => `Bearer ${localStorage.getItem("jwt")}`;

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  async _getResponseData(res) {
    if (res.ok) {
      const result = await res.json();
      return result.data;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        Authorization: getToken(),
      },
    }).then(this._getResponseData);
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: getToken(),
      },
    }).then(this._getResponseData);
  }

  sendUserInfo({name, email}) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: getToken(),
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._getResponseData);
  }

  addMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: getToken(),
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then(this._getResponseData);
  }

  deleteMovie(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: getToken(),
      },
    }).then(this._getResponseData);
  }

  singup = ({name, email, password}) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._getResponseData);
  };

  singin = ({email, password}) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(this._getResponseData)
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.token);
          return data;
        }
      });
  };
}

export const mainApi = new MainApi({
  baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
