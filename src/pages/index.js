import './index.css';

import { enableValidation } from '../components/FormValidator';

import Api from '../components/Api';
import Card from '../components/Card';
import Section from '../components/Section';
import { cardConfig, configModal, configValidate } from '../utils/constants';

let userId;

const api = new Api();

Promise.all([api.getUser('/users/me'), api.getInitialCards('/cards')])
  .then(([userData, cardsArray]) => {
    userId = userData._id;

    const section = new Section({
      items: cardsArray,
      renderer: (cardJson) => {
        const card = new Card(
          cardJson,
          cardConfig,
          {
            handleLike: (cardId) => {
              api.putLike(cardId, '/cards/likes')
                .then((res) => card.setLikeContext(res.likes))
                .catch((err) => console.log(err));
            },
            handleDislike: (cardId) => {
              api.deleteLike(cardId, '/cards/likes')
                .then((res) => card.setLikeContext(res.likes))
                .catch((err) => console.log(err));
            }
          }, userId);

          const cardElement = card.generate();
          section.addItem(cardElement);
      }
    }, '.cards__list');

    section.renderItems();

    configModal.profileNameElement.textContent = userData.name;
    configModal.profileJobElement.textContent = userData.about;
    configModal.avatarImage.src = userData.avatar;
  })
  .catch(err => console.log(err))

enableValidation(configValidate);

// configModal.openEditPopupBtnElement.addEventListener('click', openEditProfilePopupHandler);
// configModal.openAddPopupBtnElement.addEventListener('click', () => openPopup(objectPopup.addCardPopup));
// configModal.openAvatarPopupElement.addEventListener('click', () => openPopup(objectPopup.editAvatarPopup));
// editProfileForm.addEventListener('submit', (evt) => submitEditProfileFormHandler(evt));
// addCardForm.addEventListener('submit', (evt) => submitAddCardFormHandler(evt));
// editAvatarForm.addEventListener('submit', (evt) => submitEditAvatarFormHandler(evt));
// popups.forEach((popup) => {
//   popup.addEventListener('click', (evt) => {
//     closePopupHandler(evt);
//   });
// });
