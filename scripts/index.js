const content = document.querySelector('.content');
const popups = document.querySelector('.popups-wrapper');
const editPopup = popups.querySelector('.popup_type_edit-profile');
const profileName = content.querySelector('.profile__name');
const profileJob = content.querySelector('.profile__job');
const inputName = popups.querySelector('.form__input_name');
const inputJob = popups.querySelector('.form__input_job');
const addPopup = popups.querySelector('.popup_type_add-cards');
const viewPopup = popups.querySelector('.popup_type_view');
const editAvatarPopup = popups.querySelector('.popup_type_edit-avatar');
const editBtn = content.querySelector('.profile__edit-button');
const addBtn = content.querySelector('.profile__add-button');
const editForm = popups.querySelector('.form_type_editForm');
const addForm = popups.querySelector('.form_type_addForm');
const editAvatarForm = popups.querySelector('.form_type_avatar');
const cardTemplate = document.querySelector('.cards-template').content;
const wrapElement = content.querySelector('.cards__list');
const avatarOverlay = content.querySelector('.profile__overlay');

function createCardElement (title, link) {
  const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
  const cardImage = cardTemplateElement.querySelector('.cards__image');
  const cardTitle = cardTemplateElement.querySelector('.cards__caption-text');

  cardTitle.textContent = title;
  cardImage.src = link;
  cardImage.alt = title;

  return cardTemplateElement;
}

function renderCard(data, wrapElement) {
  const name = data.name;
  const link = data.link;
  const card = createCardElement(name, link);

  wrapElement.prepend(card);
}

initialCards.forEach(function(obj) {
  renderCard(obj, wrapElement);
})

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

function openEditFormHandler() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  openPopup(editPopup);
}

function closePopupHandler(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  }
}

function submitEditFormHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closePopup(editPopup);
}

function submitAddFormHandler(evt) {
  evt.preventDefault();

  const cardNameInput = popups.querySelector('.form__input_place-name');
  const cardLinkInput = popups.querySelector('.form__input_link');
  const cardObject = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };

  renderCard(cardObject, wrapElement);

  closePopup(addPopup);

  addForm.reset();
}

function submitEditAvatarHandler(evt) {
  evt.preventDefault();

  const avatarImage = content.querySelector('.profile__avatar');
  const inputEditAvatar = editAvatarForm.querySelector('.form__input');

  avatarImage.src = inputEditAvatar.value;

  closePopup(editAvatarPopup);

  editAvatarForm.reset();
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

editBtn.addEventListener('click', openEditFormHandler);
addBtn.addEventListener('click', () => openPopup(addPopup));
avatarOverlay.addEventListener('click', () => openPopup(editAvatarPopup));
editForm.addEventListener('submit', submitEditFormHandler);
addForm.addEventListener('submit', submitAddFormHandler);
editPopup.addEventListener('click', closePopupHandler);
addPopup.addEventListener('click', closePopupHandler);
editAvatarForm.addEventListener('submit', submitEditAvatarHandler);
viewPopup.addEventListener('click', closePopupHandler);
editAvatarPopup.addEventListener('click', closePopupHandler);
wrapElement.addEventListener('click', wrapElementHandler);
