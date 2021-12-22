import '../pages/index.css';

import {
  configValidate,
  configModal,
  objectPopup,
  popups,
  popupsWrapper,
  wrapElement
} from '../components/constants.js';

import {
  openEditProfilePopupHandler,
  closePopupHandler,
  submitEditProfileFormHandler,
  submitAddCardFormHandler,
  submitEditAvatarFormHandler
} from '../components/utils.js';
import { openPopup } from '../components/modal.js';
import { enableValidation } from '../components/validation.js';
import { getCards, getUserData } from '../components/api';
import { renderCard } from '../components/card';

export let userId;

Promise.all([getUserData(), getCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    configModal.profileNameElement.textContent = userData.name;
    configModal.profileJobElement.textContent = userData.about;
    configModal.avatarImage.src = userData.avatar;
    cards.reverse().forEach(card => {
      renderCard(card, wrapElement);
    });
  })
  .catch(err => console.log(err))

enableValidation(configValidate);

configModal.openEditPopupBtnElement.addEventListener('click', openEditProfilePopupHandler);
configModal.openAddPopupBtnElement.addEventListener('click', () => openPopup(objectPopup.addCardPopup));
configModal.openAvatarPopupElement.addEventListener('click', () => openPopup(objectPopup.editAvatarPopup));
popupsWrapper.querySelector(`.${configValidate.editProfileFormClass}`).addEventListener('submit', (evt) => {
  submitEditProfileFormHandler(evt);
});
popupsWrapper.querySelector(`.${configValidate.addCardFormClass}`).addEventListener('submit', (evt) => {
  submitAddCardFormHandler(evt);
});
popupsWrapper.querySelector(`.${configValidate.editAvatarFormClass}`).addEventListener('submit', (evt) => {
  submitEditAvatarFormHandler(evt);
})
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    closePopupHandler(evt);
  });
});
