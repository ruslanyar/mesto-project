import { cardTemplate, popupsWrapper, objectPopup, confirmDeleteForm } from './constants.js';
import { closePopup, openPopup } from './modal.js';
import { putLike, deleteLike, deleteCard } from './api.js';
import { hasLike } from './utils.js';
import { userId } from '../pages/index.js';

const viewImage = popupsWrapper.querySelector('.popup__view-image');
const viewCaption = popupsWrapper.querySelector('.popup__view-caption');
const confirmDeleteSubmitBtn = confirmDeleteForm.querySelector('.form__submit-btn');

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
