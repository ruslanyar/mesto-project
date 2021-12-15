import { ESC_KEY, content, popupsWrapper, objectPopup, configModal, configValidate, wrapElement } from './constants.js';
import { openPopup, closePopup } from './modal.js';
import { renderCard } from './card.js';

export function keyHandler(evt) {
  if (evt.key === ESC_KEY) {
    const popupOpened = popupsWrapper.querySelector('.popup_opened');
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
  const addCardForm = popupsWrapper.querySelector(`.${configValidate.addCardFormClass}`);
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
  const editAvatarForm = popupsWrapper.querySelector(`.${configValidate.editAvatarFormClass}`);
  const inputEditAvatar = editAvatarForm.querySelector('.form__input');

  avatarImage.src = inputEditAvatar.value;

  closePopup(objectPopup.editAvatarPopup);

  editAvatarForm.reset();
}
