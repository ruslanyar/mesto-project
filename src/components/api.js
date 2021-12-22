import { apiConfig } from './constants.js'

function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }

  return Promise.reject(`Ошибка: ${res.status}`)
}

export function getUserData() {
  return fetch(`${apiConfig.baseURL}/users/me`, {
    headers: apiConfig.headers
  })
    .then(checkResponse)
}

export function getCards() {
  return fetch(`${apiConfig.baseURL}/cards`, {
    headers: apiConfig.headers
  })
    .then(checkResponse)
}

export function patchProfileData(name, about) {
  return fetch(`${apiConfig.baseURL}/users/me`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then(checkResponse)
}

export function patchAvatar(avatarLink) {
  return fetch(`${apiConfig.baseURL}/users/me/avatar`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: avatarLink
    })
  })
  .then(checkResponse)
}

export function postNewCard(name, link) {
  return fetch(`${apiConfig.baseURL}/cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(checkResponse)
}

export function deleteCard(cardId) {
  return fetch(`${apiConfig.baseURL}/cards/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
  .then(checkResponse)
}

export function putLike(cardId) {
  return fetch(`${apiConfig.baseURL}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: apiConfig.headers
  })
  .then(checkResponse)
}

export function deleteLike(cardId) {
  return fetch (`${apiConfig.baseURL}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
  .then(checkResponse)
}
