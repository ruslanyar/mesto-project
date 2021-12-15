export const content = document.querySelector('.content');
export const popupsWrapper = document.querySelector('.popups-wrapper');
export const cardTemplate = document.querySelector('.cards-template').content;
export const wrapElement = content.querySelector('.cards__list');
export const ESC_KEY = 'Escape';
export const popups = popupsWrapper.querySelectorAll('.popup');

export const objectPopup = {
  editProfilePopup: popupsWrapper.querySelector('.popup_type_edit-profile'),
  addCardPopup: popupsWrapper.querySelector('.popup_type_add-cards'),
  viewPopup: popupsWrapper.querySelector('.popup_type_view'),
  editAvatarPopup: popupsWrapper.querySelector('.popup_type_edit-avatar')
}

export const configModal = {
  openEditPopupBtnElement: content.querySelector('.profile__edit-button'),
  openAddPopupBtnElement: content.querySelector('.profile__add-button'),
  openAvatarPopupElement: content.querySelector('.profile__overlay'),
  inputNameElement: popupsWrapper.querySelector('#name-input'),
  inputJobElement: popupsWrapper.querySelector('#job-input'),
  profileNameElement: content.querySelector('.profile__name'),
  profileJobElement: content.querySelector('.profile__job'),
  inputCardPlaceElement: popupsWrapper.querySelector('#place-input'),
  inputCardLinkElement: popupsWrapper.querySelector('#link-input'),
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
