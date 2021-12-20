import '../pages/index.css';

import {
  configValidate,
  configModal,
  objectPopup,
  popups
} from '../components/constants.js';

import { openEditProfilePopupHandler, closePopupHandler, setProfile } from '../components/utils.js';
import { setInitialCards } from '../components/card';
import { openPopup } from '../components/modal.js';
import { enableValidation } from '../components/validation.js';

setProfile();

setInitialCards();

enableValidation(configValidate);

configModal.openEditPopupBtnElement.addEventListener('click', openEditProfilePopupHandler);
configModal.openAddPopupBtnElement.addEventListener('click', () => openPopup(objectPopup.addCardPopup));
configModal.openAvatarPopupElement.addEventListener('click', () => openPopup(objectPopup.editAvatarPopup));
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    closePopupHandler(evt);
  });
});
