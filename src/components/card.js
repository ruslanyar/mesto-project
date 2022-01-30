export default class Card {
  constructor(
    {
      name,
      link,
      owner,
      _id,
      likes,
    },
    {
      templateSelector,
      contentSelector,
      likeBtnSelector,
      deleteBtnSelector,
      cardImageSelector,
      likeBtnIsActiveClass,
      likeCounterSelector,
      cardCaptionTextSelector,
    },
    {
      handleLike,
      handleDislike,
      handleCardImageClick,
      handleDeleteClick,
    },
    userId
  ) {
    this._userId = userId;
    this._cardName = name;
    this._cardLink = link;
    this._owner = owner;
    this._cardId = _id;
    this._likes = likes;
    this._templateSelector = templateSelector;
    this._contentSelector = contentSelector;
    this._likeBtnSelector = likeBtnSelector;
    this._deleteBtnSelector = deleteBtnSelector;
    this._cardImageSelector = cardImageSelector;
    this._likeBtnIsActiveClass = likeBtnIsActiveClass;
    this._likeCounterSelector = likeCounterSelector;
    this._cardCaptionTextSelector = cardCaptionTextSelector;

    // Функции-колбэки
    this._handleCardImageClick = handleCardImageClick;
    this._handleLike = handleLike;
    this._handleDislike = handleDislike;
    this._handleDeleteClick = handleDeleteClick;
  }

  generate() {
    this._element = this._getElement();

    this._setEventListeners();
    this._setDeleteContext();
    this._setCardImage();
    this.setLikeContext(this._likes);

    return this._element;
  }

  setLikeContext(res) {
    if (this._hasLike(res)) {
      this._likeBtn.classList.add(this._likeBtnIsActiveClass);
    } else {
      this._likeBtn.classList.remove(this._likeBtnIsActiveClass);
    }

    this._element
      .querySelector(this._likeCounterSelector)
      .textContent =
      res.length;

    this._likes = res;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._contentSelector)
      .cloneNode(true);

    return cardElement;
  }

  _setCardImage() {
    const cardImage = this._element.querySelector(this._cardImageSelector);

    cardImage.src = this._cardLink;
    cardImage.alt = this._cardName;

    this._element
      .querySelector(this._cardCaptionTextSelector)
      .textContent =
      this._cardName;
  }

  _hasLike(res) {
    return res.some(obj => obj._id === this._userId);
  }

  _toggleLike() {
    if (this._hasLike(this._likes)) {
      this._handleDislike(this._cardId);
    } else {
      this._handleLike(this._cardId);
    }
  }

  _isOwner() {
    return this._owner._id === this._userId;
  }

  _setDeleteContext() {
    if (!this._isOwner()) {
      this._deleteBtn.remove();
    }
  }

  _setEventListeners() {
    this._likeBtn = this._element.querySelector(this._likeBtnSelector);
    this._deleteBtn = this._element.querySelector(this._deleteBtnSelector);
    this._cardImage = this._element.querySelector(this._cardImageSelector);

    this._likeBtn.addEventListener("click", () => {
      this._toggleLike();
    });
    this._deleteBtn.addEventListener("click", () => {
      this._handleDeleteClick(this._element, this._cardId);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardImageClick();
    });
  }
}

// function createCardElement (title, link, data) {
//   const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
//   const cardImage = cardTemplateElement.querySelector('.cards__image');
//   const cardTitle = cardTemplateElement.querySelector('.cards__caption-text');
//   const likeBtn = cardTemplateElement.querySelector('.cards__like-btn');
//   const likeCounter = cardTemplateElement.querySelector('.cards__like-count');
//   const delBtn = cardTemplateElement.querySelector('.cards__del-btn');

//   const deleteHandler = function() {
//     confirmDeleteSubmitBtn.textContent = 'Удаление...';
//     confirmDeleteSubmitBtn.disabled = true;

//     deleteCard(data._id)
//       .then(() => {
//         confirmDeleteForm.removeEventListener('submit', deleteHandler);
//         cardTemplateElement.remove();
//         closePopup(objectPopup.confirmDeletePopup);
//         confirmDeleteSubmitBtn.textContent = 'Да';
//       })
//       .catch(err => {
//         console.log(err);
//         confirmDeleteSubmitBtn.textContent = 'Ошибка! Попробуйте ещё раз';
//       })
//       .finally(() => {
//         confirmDeleteSubmitBtn.disabled = false;
//       })
//   }

//   objectPopup.confirmDeletePopup.addEventListener('click', (evt) => {
//     if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
//       confirmDeleteForm.removeEventListener('submit', deleteHandler);
//     }
//   })

//   cardTitle.textContent = title;
//   cardImage.src = link;
//   cardImage.alt = title;
//   likeCounter.textContent = data.likes.length;

//   if (data.owner._id !== userId) {
//     delBtn.remove();
//   }

//   delBtn.addEventListener('click', (e) => {
//     openPopup(objectPopup.confirmDeletePopup);
//     confirmDeleteForm.addEventListener('submit', deleteHandler);
//   })

//   if (hasLike(data)) {
//     likeBtn.classList.add('cards__like-btn_active');
//   }

//   likeBtn.addEventListener('click', (evt) => {
//     if (hasLike(data)) {
//       deleteLike(data._id)
//         .then((card) => {
//           data = card;
//           likeCounter.textContent = card.likes.length;
//           evt.target.classList.remove('cards__like-btn_active');
//         })
//         .catch(err => console.log(err))
//     } else {
//       putLike(data._id)
//         .then((card) => {
//           data = card;
//           likeCounter.textContent = card.likes.length;
//           evt.target.classList.add('cards__like-btn_active');
//         })
//         .catch(err => console.log(err))
//     }
//   });

//   cardImage.addEventListener('click', (evt) => {
//     viewImage.src = evt.target.currentSrc;
//     viewImage.alt = evt.target.alt;
//     viewCaption.textContent = evt.target.alt;

//     openPopup (objectPopup.viewPopup);
//   });

//   return cardTemplateElement;
// }
