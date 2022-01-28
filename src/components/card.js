const viewImage = popupsWrapper.querySelector('.popup__view-image');
const viewCaption = popupsWrapper.querySelector('.popup__view-caption');
const confirmDeleteSubmitBtn = confirmDeleteForm.querySelector('.form__submit-btn');

export default class Card {
  constructor(
    {
      name,
      link,
      _id,
      owner,
      likes,
    },
    {
      templateSelector,
      contentSelector,
      likeBtnSelector,
      deleteBtnSelector,
      cardImageSelector,
    },
    {
      handleCardImageClick,
      handlePutLike,
      handleDeleteLike,
      handleDeleteClick,
    },
    userId
  ) {
    this._userId = userId;
    this._cardName = name;
    this._cardLink = link;
    this._cardId = _id;
    this._owner = owner;
    this._likes = likes;
    this._templateSelector = templateSelector;
    this._contentSelector = contentSelector;
    this._likeBtnSelector = likeBtnSelector;
    this._deleteBtnSelector = deleteBtnSelector;
    this._cardImageSelector = cardImageSelector;
    // Функции-колбэки
    this._handleCardImageClick = handleCardImageClick;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
    this._handleDeleteClick = handleDeleteClick;
  }

  generate() {
    this._element = this._getElement();

    this._setEventListeners();

    return this._element;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._contentSelector)
      .cloneNode(true);

    return cardElement;
  }

  _hasLike() {
    return this._likes.some(obj => obj._id == this._userId);
  }

  _handleLike() {
    if (this._hasLike()) {
      this._handleDeleteLike();
    } else {
      this._handleDeleteLike();
    }
  }

  _setEventListeners() {
    const likeBtn = document.querySelector(this._likeBtnSelector);
    const deleteBtn = document.querySelector(this._deleteBtnSelector);
    const cardImage = document.querySelector(this._cardImageSelector);

    likeBtn.addEventListener("click", () => {
      this._handleLike();
    });
    deleteBtn.addEventListener("click", () => {});
    cardImage.addEventListener("click", () => {});
  }
}

function createCardElement (title, link, data) {
  const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
  const cardImage = cardTemplateElement.querySelector('.cards__image');
  const cardTitle = cardTemplateElement.querySelector('.cards__caption-text');
  const likeBtn = cardTemplateElement.querySelector('.cards__like-btn');
  const likeCounter = cardTemplateElement.querySelector('.cards__like-count');
  const delBtn = cardTemplateElement.querySelector('.cards__del-btn');

  const deleteHandler = function() {
    confirmDeleteSubmitBtn.textContent = 'Удаление...';
    confirmDeleteSubmitBtn.disabled = true;

    deleteCard(data._id)
      .then(() => {
        confirmDeleteForm.removeEventListener('submit', deleteHandler);
        cardTemplateElement.remove();
        closePopup(objectPopup.confirmDeletePopup);
        confirmDeleteSubmitBtn.textContent = 'Да';
      })
      .catch(err => {
        console.log(err);
        confirmDeleteSubmitBtn.textContent = 'Ошибка! Попробуйте ещё раз';
      })
      .finally(() => {
        confirmDeleteSubmitBtn.disabled = false;
      })
  }

  objectPopup.confirmDeletePopup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
      confirmDeleteForm.removeEventListener('submit', deleteHandler);
    }
  })

  cardTitle.textContent = title;
  cardImage.src = link;
  cardImage.alt = title;
  likeCounter.textContent = data.likes.length;

  if (data.owner._id !== userId) {
    delBtn.remove();
  }

  delBtn.addEventListener('click', (e) => {
    openPopup(objectPopup.confirmDeletePopup);
    confirmDeleteForm.addEventListener('submit', deleteHandler);
  })

  if (hasLike(data)) {
    likeBtn.classList.add('cards__like-btn_active');
  }

  likeBtn.addEventListener('click', (evt) => {
    if (hasLike(data)) {
      deleteLike(data._id)
        .then((card) => {
          data = card;
          likeCounter.textContent = card.likes.length;
          evt.target.classList.remove('cards__like-btn_active');
        })
        .catch(err => console.log(err))
    } else {
      putLike(data._id)
        .then((card) => {
          data = card;
          likeCounter.textContent = card.likes.length;
          evt.target.classList.add('cards__like-btn_active');
        })
        .catch(err => console.log(err))
    }
  });

  cardImage.addEventListener('click', (evt) => {
    viewImage.src = evt.target.currentSrc;
    viewImage.alt = evt.target.alt;
    viewCaption.textContent = evt.target.alt;

    openPopup (objectPopup.viewPopup);
  });

  return cardTemplateElement;
}

export function renderCard(data, wrapElement) {
  const name = data.name;
  const link = data.link;
  const card = createCardElement(name, link, data);

  wrapElement.prepend(card);
}
