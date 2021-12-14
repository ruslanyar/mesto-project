import { ESC_KEY, content, popups, objectPopup, configModal, configValidate, wrapElement } from './constants.js';
import { openPopup, closePopup } from './modal.js';
import { renderCard } from './card.js';

export function keyHandler(evt) {
  if (evt.key === ESC_KEY) {
    const popupOpened = popups.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

export function openEditProfilePopupHandler() {
  configModal.inputNameElement.value = configModal.profileNameElement.textContent;
  configModal.inputJobElement.value = configModal.profileJobElement.textContent;

  openPopup(objectPopup.editProfilePopup);
}

export function closePopupHandler(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  }
}

export function submitEditProfilePopupHandler() {
  configModal.profileNameElement.textContent = configModal.inputNameElement.value;
  configModal.profileJobElement.textContent = configModal.inputJobElement.value;

  closePopup(objectPopup.editProfilePopup);
}

export function submitAddCardPopupHandler() {
  const addCardForm = popups.querySelector(`.${configValidate.addCardFormClass}`);
  const cardObject = {
    name: configModal.inputCardPlaceElement.value,
    link: configModal.inputCardLinkElement.value
  }

  renderCard(cardObject, wrapElement);

  closePopup(objectPopup.addCardPopup);

  addCardForm.reset();
}

export function submitEditAvatarPopupHandler() {
  const avatarImage = content.querySelector('.profile__avatar');
  const editAvatarForm = popups.querySelector(`.${configValidate.editAvatarFormClass}`);
  const inputEditAvatar = editAvatarForm.querySelector('.form__input');

  avatarImage.src = inputEditAvatar.value;

  closePopup(objectPopup.editAvatarPopup);

  editAvatarForm.reset();
}


export function wrapElementHandler(evt) {
  if (evt.target.classList.contains('cards__like-btn')) {
    evt.target.classList.toggle('cards__like-btn_active');
  }

  if (evt.target.classList.contains('cards__del-btn')) {
    evt.target.closest('.cards__list-item').remove();
  }

  if (evt.target.classList.contains('cards__image')) {
    const viewImage = popups.querySelector('.popup__view-image');
    const viewCaption = popups.querySelector('.popup__view-caption');

    viewImage.src = evt.target.currentSrc;
    viewImage.alt = evt.target.alt;
    viewCaption.textContent = evt.target.alt;

    openPopup (objectPopup.viewPopup);
  }
}
