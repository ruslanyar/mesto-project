import { apiConfig } from '../utils/constants'

export default class Api {
  constructor({ baseURL, headers } = apiConfig) {
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

  patchProfile({ userName, userAbout }, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}`, {       // /users/me
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    }).then((res) => this._checkResponse(res));
  }

  patchAvatar(userAvatarLink, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}`, {       // /users/me/avatar
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatarLink,
      }),
    }).then((res) => this._checkResponse(res));
  }

  postNewCard({ cardName, cardLink }, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}`, {       // /cards
      method: "POST",
      headers: apiConfig.headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardId, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}/${cardId}`, {       // /cards
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  putLike(cardId, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}/${cardId}`, {       // /cards/likes
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteLike(cardId, serviceUrl) {
    return fetch(`${this._baseURL}${serviceUrl}/${cardId}`, {       // /cards/likes
      method: "DELETE",
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

// function checkResponse(res) {
//   if (res.ok) {
//     return res.json()
//   }

//   return Promise.reject(`Ошибка: ${res.status}`)
// }

// export function getUserData() {
//   return fetch(`${apiConfig.baseURL}/users/me`, {
//     headers: apiConfig.headers
//   })
//     .then(checkResponse)
// }

// export function getCards() {
//   return fetch(`${apiConfig.baseURL}/cards`, {
//     headers: apiConfig.headers
//   })
//     .then(checkResponse)
// }

// export function patchProfileData(name, about) {
//   return fetch(`${apiConfig.baseURL}/users/me`, {
//     method: 'PATCH',
//     headers: apiConfig.headers,
//     body: JSON.stringify({
//       name: name,
//       about: about
//     })
//   })
//   .then(checkResponse)
// }

// export function patchAvatar(avatarLink) {
//   return fetch(`${apiConfig.baseURL}/users/me/avatar`, {
//     method: 'PATCH',
//     headers: apiConfig.headers,
//     body: JSON.stringify({
//       avatar: avatarLink
//     })
//   })
//   .then(checkResponse)
// }

// export function postNewCard(name, link) {
//   return fetch(`${apiConfig.baseURL}/cards`, {
//     method: 'POST',
//     headers: apiConfig.headers,
//     body: JSON.stringify({
//       name: name,
//       link: link
//     })
//   })
//   .then(checkResponse)
// }

// export function deleteCard(cardId) {
//   return fetch(`${apiConfig.baseURL}/cards/${cardId}`, {
//     method: 'DELETE',
//     headers: apiConfig.headers
//   })
//   .then(checkResponse)
// }

// export function putLike(cardId) {
//   return fetch(`${apiConfig.baseURL}/cards/likes/${cardId}`, {
//     method: 'PUT',
//     headers: apiConfig.headers
//   })
//   .then(checkResponse)
// }

// export function deleteLike(cardId) {
//   return fetch (`${apiConfig.baseURL}/cards/likes/${cardId}`, {
//     method: 'DELETE',
//     headers: apiConfig.headers
//   })
//   .then(checkResponse)
// }
