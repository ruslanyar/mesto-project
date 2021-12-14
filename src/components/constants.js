export const content = document.querySelector('.content');
export const popups = document.querySelector('.popups-wrapper');
export const cardTemplate = document.querySelector('.cards-template').content;
export const wrapElement = content.querySelector('.cards__list');
export const ESC_KEY = 'Escape';

export const objectPopup = {
  editProfilePopup: popups.querySelector('.popup_type_edit-profile'),
  addCardPopup: popups.querySelector('.popup_type_add-cards'),
  viewPopup: popups.querySelector('.popup_type_view'),
  editAvatarPopup: popups.querySelector('.popup_type_edit-avatar')
}

export const configModal = {
  openEditPopupBtnElement: content.querySelector('.profile__edit-button'),
  openAddPopupBtnElement: content.querySelector('.profile__add-button'),
  openAvatarPopupElement: content.querySelector('.profile__overlay'),
  inputNameElement: popups.querySelector('#name-input'),
  inputJobElement: popups.querySelector('#job-input'),
  profileNameElement: content.querySelector('.profile__name'),
  profileJobElement: content.querySelector('.profile__job'),
  inputCardPlaceElement: popups.querySelector('#place-input'),
  inputCardLinkElement: popups.querySelector('#link-input'),

}

export const configValidate = {
  formSelector: '.form',
  editProfileFormClass: 'form_type_edit-profile-form',
  addCardFormClass: 'form_type_add-card-form',
  editAvatarFormClass: 'form_type_edit-avatar-form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  disabledButtonClass: 'form__submit-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
}

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
