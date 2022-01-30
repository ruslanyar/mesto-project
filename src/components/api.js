export default class Api {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  getUser(serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  getInitialCards(serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  patchProfile(userName, userAbout, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    }).then((res) => this._checkResponse(res));
  }

  patchAvatar(userAvatarLink, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatarLink,
      }),
    }).then((res) => this._checkResponse(res));
  }

  postNewCard(cardName, cardLink, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardId, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  putLike(cardId, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteLike(cardId, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
