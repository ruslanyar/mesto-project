import { ESC_KEY, popupsWrapper, objectPopup, configModal, configValidate, wrapElement, apiConfig } from './constants.js';
import { openPopup, closePopup } from './modal.js';
import { renderCard } from './card.js';
import { getProfileData, patchProfileData, postNewCard, putLike, deleteLike, patchAvatar } from './api.js';

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

function setButtonState(button, isSending) {
  button.disabled = isSending;
  button.textContent = isSending ? 'Сохранение...' : 'Сохранить';
}

export function submitEditProfilePopupHandler(evt) {

  setButtonState(evt.submitter, true);

  patchProfileData(configModal.inputNameElement.value, configModal.inputJobElement.value)
    .then((res) => {
      configModal.profileNameElement.textContent = res.name;
      configModal.profileJobElement.textContent = res.about;
    })
    .catch(err => console.log(err))
    .finally(() => {
      setButtonState(evt.submitter, false);
      evt.submitter.classList.add(configValidate.disabledButtonClass);
      closePopup(objectPopup.editProfilePopup);
    });
}

export function submitAddCardPopupHandler(evt) {
  const addCardForm = popupsWrapper.querySelector(`.${configValidate.addCardFormClass}`);

  setButtonState(evt.submitter, true);

  postNewCard(configModal.inputCardPlaceElement.value, configModal.inputCardLinkElement.value)
    .then((card) => {
      renderCard(card, wrapElement);
    })
    .catch(err => console.log(err))
    .finally(() => {
      setButtonState(evt.submitter, false);
      evt.submitter.classList.add(configValidate.disabledButtonClass);
      closePopup(objectPopup.addCardPopup);
      addCardForm.reset();
    });
}

export function submitEditAvatarPopupHandler(evt) {
  const editAvatarForm = popupsWrapper.querySelector(`.${configValidate.editAvatarFormClass}`);
  const inputEditAvatar = editAvatarForm.querySelector('.form__input');

  setButtonState(evt.submitter, true);

  patchAvatar(inputEditAvatar.value)
    .then((res) => {
      configModal.avatarImage.src = res.avatar;
    })
    .catch(err => console.log(err))
    .finally(() => {
      setButtonState(evt.submitter, false);
      closePopup(objectPopup.editAvatarPopup);
      editAvatarForm.reset();
    })
}

export function setProfile() {
  getProfileData()
    .then(data => {
      configModal.profileNameElement.textContent = data.name;
      configModal.profileJobElement.textContent = data.about;
      configModal.avatarImage.src = data.avatar;
    })
    .catch(err => console.log(err))
}

export function hasLike(card) {
  return card.likes.some(obj => obj._id == apiConfig.id)
}

export function toggleLike(card, likeCounter, evt) {
  if (hasLike(card)) {
    deleteLike(card._id)
      .then((card) => {
        likeCounter.textContent = card.likes.length;
        evt.target.classList.remove('cards__like-btn_active');
      })
      .catch(err => console.log(err))
  } else {
    putLike(card._id)
      .then((card) => {
        likeCounter.textContent = card.likes.length;
        evt.target.classList.add('cards__like-btn_active');
      })
      .catch(err => console.log(err))
  }
}
