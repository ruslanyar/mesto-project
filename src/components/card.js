import { cardTemplate, popupsWrapper, objectPopup } from './constants.js';
import { openPopup } from './modal.js';

function createCardElement (title, link) {
  const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
  const cardImage = cardTemplateElement.querySelector('.cards__image');
  const cardTitle = cardTemplateElement.querySelector('.cards__caption-text');
  const likeBtn = cardTemplateElement.querySelector('.cards__like-btn');
  const delBtn = cardTemplateElement.querySelector('.cards__del-btn');

  cardTitle.textContent = title;
  cardImage.src = link;
  cardImage.alt = title;

  likeBtn.addEventListener('click', function(evt) {
    evt.target.classList.toggle('cards__like-btn_active');
  });

  delBtn.addEventListener('click', function(evt) {
    evt.target.closest('.cards__list-item').remove();
  });

  cardImage.addEventListener('click', function(evt){
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
  const card = createCardElement(name, link);

  wrapElement.prepend(card);
}

