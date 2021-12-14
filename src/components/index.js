import '../pages/index.css';

import {
  wrapElement,
  initialCards,
  configValidate,
  configModal,
  objectPopup
} from './constants.js';

import { openEditProfilePopupHandler, closePopupHandler, wrapElementHandler } from './utils.js';
import { renderCard } from './card.js';
import { openPopup } from './modal.js';
import { enableValidation } from './validation.js';

initialCards.forEach((obj) => {
  renderCard(obj, wrapElement);
});

enableValidation(configValidate);

configModal.openEditPopupBtnElement.addEventListener('click', openEditProfilePopupHandler);
configModal.openAddPopupBtnElement.addEventListener('click', () => openPopup(objectPopup.addCardPopup));
configModal.openAvatarPopupElement.addEventListener('click', () => openPopup(objectPopup.editAvatarPopup));
objectPopup.editProfilePopup.addEventListener('click', closePopupHandler);
objectPopup.addCardPopup.addEventListener('click', closePopupHandler);
objectPopup.viewPopup.addEventListener('click', closePopupHandler);
objectPopup.editAvatarPopup.addEventListener('click', closePopupHandler);
wrapElement.addEventListener('click', wrapElementHandler);
