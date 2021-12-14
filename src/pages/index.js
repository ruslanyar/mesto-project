import '../pages/index.css';

import {
  wrapElement,
  initialCards,
  configValidate,
  configModal,
  objectPopup
} from '../components/constants.js';

import { openEditProfilePopupHandler, closePopupHandler, wrapElementHandler } from '../components/utils.js';
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
objectPopup.editProfilePopup.addEventListener('click', closePopupHandler);
objectPopup.addCardPopup.addEventListener('click', closePopupHandler);
objectPopup.viewPopup.addEventListener('click', closePopupHandler);
objectPopup.editAvatarPopup.addEventListener('click', closePopupHandler);
wrapElement.addEventListener('click', wrapElementHandler);
