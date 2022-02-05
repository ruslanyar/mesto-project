export const apiConfig = {
  baseURL: 'https://nomoreparties.co/v1/plus-cohort-5',
  headers: {
    authorization: '15bc8486-d99e-482f-a261-777fcdb33804',
    'Content-Type': 'application/json'
  }
}

export const cardConfig = {
  templateSelector: '.cards-template',
  contentSelector: '.cards__list-item',
  likeBtnSelector: '.cards__like-btn',
  deleteBtnSelector: '.cards__del-btn',
  cardImageSelector: '.cards__image',
  likeBtnIsActiveClass: 'cards__like-btn_active',
  likeCounterSelector: '.cards__like-count',
  cardCaptionTextSelector: '.cards__caption-text',
}

export const configValidate = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  disabledButtonClass: 'form__submit-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorIsActiveClass: 'form__input-error_active',
}

export const configPopup = {
  popupIsOpenedClass: 'popup_opened',
  closeBtnClass: 'popup__close-button',
  imageSelector: '.popup__view-image',
  imageCaptionSelector: '.popup__view-caption',
  formSelector: '.form',
  inputSelector: '.form__input',
  submitBtnSelector: '.form__submit-btn',
}

export const configProfile = {
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__job',
  profileAvatarSelector: '.profile__avatar',
}

export const editProfileButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
export const editAvatar = document.querySelector('.profile__overlay');
