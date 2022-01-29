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
};

export const configValidate = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  disabledButtonClass: 'form__submit-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
}

export const configPopup = {
  popupSelector: '.popup',
  popupIsOpenedClass: 'popup_opened',
  closeBtnClass: 'popup__close-button',
}




export const objectPopup = {
  editProfilePopup: popupsWrapper.querySelector('.popup_type_edit-profile'),
  addCardPopup: popupsWrapper.querySelector('.popup_type_add-cards'),
  viewPopup: popupsWrapper.querySelector('.popup_type_view'),
  editAvatarPopup: popupsWrapper.querySelector('.popup_type_edit-avatar'),
  confirmDeletePopup: popupsWrapper.querySelector('.popup_type_confirm-delete'),
}




