export const content = document.querySelector('.content');
export const popupsWrapper = document.querySelector('.popups-wrapper');
export const cardTemplate = document.querySelector('.cards-template').content;
export const wrapElement = content.querySelector('.cards__list');
export const ESC_KEY = 'Escape';
export const popups = popupsWrapper.querySelectorAll('.popup');
export const editProfileForm = document.forms.profile;
export const addCardForm = document.forms.addCard;
export const editAvatarForm = document.forms.avatar;
export const confirmDeleteForm = document.forms.confirm;

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

export const objectPopup = {
  editProfilePopup: popupsWrapper.querySelector('.popup_type_edit-profile'),
  addCardPopup: popupsWrapper.querySelector('.popup_type_add-cards'),
  viewPopup: popupsWrapper.querySelector('.popup_type_view'),
  editAvatarPopup: popupsWrapper.querySelector('.popup_type_edit-avatar'),
  confirmDeletePopup: popupsWrapper.querySelector('.popup_type_confirm-delete'),
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
  avatarImage: content.querySelector('.profile__avatar'),
}

export const configValidate = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  disabledButtonClass: 'form__submit-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
}
