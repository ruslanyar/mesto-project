import { cardTemplate, popupsWrapper, objectPopup, wrapElement, apiConfig } from './constants.js';
import { openPopup } from './modal.js';
import { deleteCard, getCards } from './api.js';
import { hasLike, toggleLike } from './utils.js';

function createDeleteBtn(card) {
  const delBtn = document.createElement('button');

  delBtn.setAttribute('type', 'button');
  delBtn.setAttribute('aria-label', 'Удалить');
  delBtn.classList.add('cards__del-btn');

  delBtn.addEventListener('click', (evt) => {
    deleteCard(card._id)
      .then(() => {
        evt.target.parentNode.remove();
      })
      .catch(err => console.log(err))
  });

  return delBtn;
}

function addDeleteBtn(wrapper, card) {
  const delBtn = createDeleteBtn(card);

  wrapper.append(delBtn);
}

function createCardElement (title, link, data) {
  const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
  const cardImage = cardTemplateElement.querySelector('.cards__image');
  const cardTitle = cardTemplateElement.querySelector('.cards__caption-text');
  const likeBtn = cardTemplateElement.querySelector('.cards__like-btn');
  const likeCounter = cardTemplateElement.querySelector('.cards__like-count');

  cardTitle.textContent = title;
  cardImage.src = link;
  cardImage.alt = title;
  likeCounter.textContent = data.likes.length;

  if (data.owner._id === apiConfig.id) {
    addDeleteBtn(cardTemplateElement, data);
  }

  if (hasLike(data)) {
    likeBtn.classList.add('cards__like-btn_active');
  }

  likeBtn.addEventListener('click', (evt) => {
    getCards()
      .then(cards => {
        return cards.find(card => card._id === data._id)
      })
      .then(card => {
        toggleLike(card, likeCounter, evt)
      })
      .catch(err => console.log(err))
  });

  cardImage.addEventListener('click', (evt) => {
    const viewImage = popupsWrapper.querySelector('.popup__view-image');
    const viewCaption = popupsWrapper.querySelector('.popup__view-caption');

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

export function setInitialCards() {
  getCards()
    .then(cards => {
      cards.reverse().forEach(card => {
        renderCard(card, wrapElement);
      });
    })
    .catch(err => console.log(err))
}
