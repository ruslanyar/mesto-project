import { ESC_KEY, popupsWrapper, objectPopup, configModal, configValidate, wrapElement } from './constants.js';
import { openPopup, closePopup } from './modal.js';
import { renderCard } from './card.js';
import { patchProfileData, postNewCard, patchAvatar } from './api.js';
import { userId } from '../pages/index.js';

const editProfileForm = popupsWrapper.querySelector(`.${configValidate.editProfileFormClass}`);
const addCardForm = popupsWrapper.querySelector(`.${configValidate.addCardFormClass}`);
const editAvatarForm = popupsWrapper.querySelector(`.${configValidate.editAvatarFormClass}`);
const inputEditAvatar = editAvatarForm.querySelector('.form__input');

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

export function submitEditProfileFormHandler(evt) {
  evt.submitter.textContent = 'Сохранение...';
  evt.submitter.disabled = true;

  patchProfileData(configModal.inputNameElement.value, configModal.inputJobElement.value)
    .then((res) => {
      configModal.profileNameElement.textContent = res.name;
      configModal.profileJobElement.textContent = res.about;
      evt.submitter.classList.add(configValidate.disabledButtonClass);
      evt.submitter.textContent = 'Сохранить';
      closePopup(objectPopup.editProfilePopup);
      editProfileForm.reset();
    })
    .catch(err => {
      console.log(err);
      evt.submitter.textContent = 'Ошибка! Попробуйте ещё раз';
      evt.submitter.disabled = false;
    })
}

export function submitAddCardFormHandler(evt) {
  evt.submitter.textContent = 'Сохранение...';
  evt.submitter.disabled = true;

  postNewCard(configModal.inputCardPlaceElement.value, configModal.inputCardLinkElement.value)
    .then((card) => {
      renderCard(card, wrapElement);
      evt.submitter.classList.add(configValidate.disabledButtonClass);
      evt.submitter.textContent = 'Сохранить';
      closePopup(objectPopup.addCardPopup);
      addCardForm.reset();
    })
    .catch(err => {
      console.log(err);
      evt.submitter.textContent = 'Ошибка! Попробуйте ещё раз';
      evt.submitter.disabled = false;
    })
}

export function submitEditAvatarFormHandler(evt) {
  evt.submitter.textContent = 'Сохранение...';
  evt.submitter.disabled = true;

  patchAvatar(inputEditAvatar.value)
    .then((res) => {
      configModal.avatarImage.src = res.avatar;
      evt.submitter.classList.add(configValidate.disabledButtonClass);
      evt.submitter.textContent = 'Сохранить';
      closePopup(objectPopup.editAvatarPopup);
      editAvatarForm.reset();
    })
    .catch(err => {
      console.log(err);
      evt.submitter.textContent = 'Ошибка! Попробуйте ещё раз';
      evt.submitter.disabled = false;
    })
}

export function hasLike(card) {
  return card.likes.some(obj => obj._id == userId)
}
