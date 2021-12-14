import { cardTemplate } from './constants.js';

function createCardElement (title, link) {
  const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
  const cardImage = cardTemplateElement.querySelector('.cards__image');
  const cardTitle = cardTemplateElement.querySelector('.cards__caption-text');

  cardTitle.textContent = title;
  cardImage.src = link;
  cardImage.alt = title;

  return cardTemplateElement;
}

export function renderCard(data, wrapElement) {
  const name = data.name;
  const link = data.link;
  const card = createCardElement(name, link);

  wrapElement.prepend(card);
}

