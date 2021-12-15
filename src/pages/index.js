import '../pages/index.css';

import {
  wrapElement,
  initialCards,
  configValidate,
  configModal,
  objectPopup,
  popups
} from '../components/constants.js';

import { openEditProfilePopupHandler, closePopupHandler } from '../components/utils.js';
import { renderCard } from '../components/card.js';
import { openPopup } from '../components/modal.js';
import { enableValidation } from '../components/validation.js';

initialCards.forEach((obj) => {
  renderCard(obj, wrapElement);
});

enableValidation(configValidate);

configModal.openEditPopupBtnElement.addEventListener('click', openEditProfilePopupHandler);
configModal.openAddPopupBtnElement.addEventListener('click', () => openPopup(objectPopup.addCardPopup));
configModal.openAvatarPopupElement.addEventListener('click', () => openPopup(objectPopup.editAvatarPopup));
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    closePopupHandler(evt);
  });
});
