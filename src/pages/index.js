import './index.css';

import Api from '../components/Api';
import Card from '../components/Card';
import Section from '../components/Section';
import FormValidator from '../components/FormValidator';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';

import {
  cardConfig,
  configValidate,
  configPopup,
  configProfile,
  apiConfig,
  editProfileButton,
  addCardButton,
  editAvatar,
} from '../utils/constants';
import {
  setSubmitterDefaultStatus,
  setSubmitterLoadingStatus,
  setSubmitterErrorStatus
} from '../utils/utils';

// API
const api = new Api(apiConfig);

// USER INFO
const userInfo = new UserInfo(configProfile, {
  handleGetUser: () => api.getUser('/users/me'),
  handleSetUser: (name, about) => api.patchProfile(name, about, '/users/me'),
  handleSetAvatar: (avatarLink) => api.patchAvatar(avatarLink, '/users/me/avatar'),
});

// EDIT PROFILE
const editProfilePopup = new PopupWithForm(
  configPopup, {
    handleFormSubmit: ({
      firstName,
      job
    }) => {
      setSubmitterLoadingStatus(editProfilePopup.submitButton);
      userInfo.setUserInfo(firstName, job)
        .then((userData) => userInfo.updateUserInfo(userData))
        .then(() => {
          editProfilePopup.close();
          setSubmitterDefaultStatus(editProfilePopup.submitButton);
        })
        .catch((err) => {
          console.log(err);
          setSubmitterErrorStatus(editProfilePopup.submitButton);
        });
    },
  },
  '.popup_type_edit-profile'
);

editProfilePopup.setEventListeners();

// AVATAR POPUP
const avatarPopup = new PopupWithForm(
  configPopup, {
    handleFormSubmit: ({
      'profile-avatar': avatar
    }) => {
      setSubmitterLoadingStatus(avatarPopup.submitButton);
      userInfo.setAvatar(avatar)
        .then((data) => {
          userInfo.updateUserInfo(data);
        })
        .then(() => {
          avatarPopup.close();
          setSubmitterDefaultStatus(avatarPopup.submitButton);
        })
        .catch((err) => {
          console.log(err);
          setSubmitterErrorStatus(avatarPopup.submitButton);
        });
    }
  },
  '.popup_type_edit-avatar'
);

avatarPopup.setEventListeners();

// ADD NEW CARD POPUP
const addNewCardPopup = new PopupWithForm(
  configPopup, {
    handleFormSubmit: ({
      placeName,
      link
    }) => {
      setSubmitterLoadingStatus(addNewCardPopup.submitButton);
      api.postNewCard(placeName, link, '/cards')
        .then((cardData) => section.addItem(cardData))
        .then(() => {
          addNewCardPopup.close();
          setSubmitterDefaultStatus(addNewCardPopup.submitButton);
        })
        .catch((err) => {
          console.log(err);
          setSubmitterErrorStatus(addNewCardPopup.submitButton);
        });
    }
  },
  '.popup_type_add-cards'
);

addNewCardPopup.setEventListeners();

// POPUP WITH IMAGE
const viewImagePopup = new PopupWithImage(configPopup, '.popup_type_view');
viewImagePopup.setEventListeners();

// DELETE CONFIRMATION POPUP
const confirmPopup = new PopupWithForm(
  configPopup, {
    handleFormSubmit: () => {
      setSubmitterLoadingStatus(confirmPopup.submitButton)
      api.deleteCard(confirmPopup.cardId, '/cards')
        .then(() => {
          confirmPopup.cardElement.remove();
          confirmPopup.close();
          setSubmitterDefaultStatus(confirmPopup.submitButton);
          confirmPopup.cardElement = null;
          confirmPopup.cardId = null;
        })
        .catch((err) => {
          console.log(err);
          setSubmitterErrorStatus(confirmPopup.submitButton);
        })
    }
  },
  '.popup_type_confirm-delete'
);

confirmPopup.setEventListeners();

// RENDER INITIAL CARDS
const section = new Section({
    renderer: (item) => {
      const card = new Card(
        item,
        cardConfig, {
          handleLike: (cardId) => {
            api.putLike(cardId, '/cards/likes')
              .then((cardData) => card.setLikeContext(cardData.likes))
              .catch((err) => console.log(err))
          },
          handleDislike: (cardId) => {
            api.deleteLike(cardId, '/cards/likes')
              .then((cardData) => card.setLikeContext(cardData.likes))
              .catch((err) => console.log(err))
          },
          handleCardImageClick: () => {
            viewImagePopup.open(item.link, item.name);
          },
          handleDeleteClick: (cardElement, cardId) => {
            confirmPopup.cardElement = cardElement;
            confirmPopup.cardId = cardId;
            confirmPopup.open();
          },
        },
        userInfo.getUserId()
      );
      return card.generate();
    },
  },
  '.cards__list'
);

[...document.forms].forEach((formElement) => {
  const formValidator = new FormValidator(configValidate, formElement);
  formValidator.enableValidation();
});

// EVENT LISTENERS
editProfileButton.addEventListener('click', () => {
  userInfo.getUserInfo()
    .then((userData) => {
      editProfilePopup.setInputValue('firstName', userData.name);
      editProfilePopup.setInputValue('job', userData.about);
    });

  setSubmitterDefaultStatus(editProfilePopup.submitButton);
  editProfilePopup.open();
});

editAvatar.addEventListener('click', () => {
  setSubmitterDefaultStatus(avatarPopup.submitButton);
  avatarPopup.open();
});

addCardButton.addEventListener('click', () => {
  setSubmitterDefaultStatus(addNewCardPopup.submitButton);
  addNewCardPopup.open();
});

// ---------------------
Promise.all([userInfo.getUserInfo(), api.getInitialCards('/cards')])
  .then(([userData, cardsArray]) => {
    userInfo.updateUserInfo(userData);
    section.renderItems(cardsArray);
  })
  .catch((err) => console.log(err));
