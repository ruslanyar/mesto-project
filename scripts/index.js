const content = document.querySelector('.content');

const cardTemplate = document.querySelector('.cards-template').content;
const wrapElement = content.querySelector('.cards__list');

const editBtn = content.querySelector('.profile__edit-button');
const addBtn = content.querySelector('.profile__add-button');

const profileName = content.querySelector('.profile__name');
const profileJob = content.querySelector('.profile__job');

const avatarOverlay = content.querySelector('.profile__overlay');
// Popups
const popups = document.querySelector('.popups-wrapper');
const editPopup = popups.querySelector('.popup_type_edit-profile');
const addPopup = popups.querySelector('.popup_type_add-cards');
const viewPopup = popups.querySelector('.popup_type_view');
const editAvatarPopup = popups.querySelector('.popup_type_edit-avatar');
// Forms
const forms = document.forms;
const editProfileFormElement = forms.profile;
const addCardFormElement = forms.addCard;
const editAvatarFormElement = forms.avatar;
// Inputs
const inputName = editProfileFormElement.elements.firstName;
const inputJob = editProfileFormElement.elements.job;

//! Создание шаблона карточки
function createCardElement (title, link) {
  const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
  const cardImage = cardTemplateElement.querySelector('.cards__image');
  const cardTitle = cardTemplateElement.querySelector('.cards__caption-text');

  cardTitle.textContent = title;
  cardImage.src = link;
  cardImage.alt = title;

  return cardTemplateElement;
}

//! Заполнение карточки
function renderCard(data, wrapElement) {
  const name = data.name;
  const link = data.link;
  const card = createCardElement(name, link);

  wrapElement.prepend(card);
}

//! Инициализация дефолтных карточек
initialCards.forEach((obj) => {
  renderCard(obj, wrapElement);
});

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  window.addEventListener('keydown', keyHandler);
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  window.removeEventListener('keydown', keyHandler);
}

function keyHandler(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = popups.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function openEditProfileFormElementHandler() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  openPopup(editPopup);
}

function closePopupHandler(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  }
}

function submitEditProfileFormElementHandler() {
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup(editPopup);
}

function submitAddCardFormElementHandler() {
  const cardNameInput = addCardFormElement.elements.placeName;
  const cardLinkInput = addCardFormElement.elements.link;
  const cardObject = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  }

  renderCard(cardObject, wrapElement);

  closePopup(addPopup);

  addCardFormElement.reset();
}

function submitEditAvatarFormElementHandler() {
  const avatarImage = content.querySelector('.profile__avatar');
  const inputEditAvatar = editAvatarFormElement.querySelector('.form__input');

  avatarImage.src = inputEditAvatar.value;

  closePopup(editAvatarPopup);

  editAvatarFormElement.reset();
}

function wrapElementHandler(evt) {
  if (evt.target.classList.contains('cards__like-btn')) {
    evt.target.classList.toggle('cards__like-btn_active');
  }

  if (evt.target.classList.contains('cards__del-btn')) {
    evt.target.closest('.cards__list-item').remove();
  }

  if (evt.target.classList.contains('cards__image')) {
    const viewImage = popups.querySelector('.popup__view-image');
    const viewCaption = popups.querySelector('.popup__view-caption');

    viewImage.src = evt.target.currentSrc;
    viewImage.alt = evt.target.alt;
    viewCaption.textContent = evt.target.alt;

    openPopup (viewPopup);
  }
}

editBtn.addEventListener('click', openEditProfileFormElementHandler);
addBtn.addEventListener('click', () => openPopup(addPopup));
avatarOverlay.addEventListener('click', () => openPopup(editAvatarPopup));
editPopup.addEventListener('click', closePopupHandler);
addPopup.addEventListener('click', closePopupHandler);
viewPopup.addEventListener('click', closePopupHandler);
editAvatarPopup.addEventListener('click', closePopupHandler);
wrapElement.addEventListener('click', wrapElementHandler);
