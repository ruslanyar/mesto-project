const content = document.querySelector('.content');
const popups = document.querySelector('.popups-wrapper');
const editBtn = content.querySelector('.profile__edit-button');
const addBtn = content.querySelector('.profile__add-button');
const closeBtn = popups.querySelectorAll('.popup__close-button');
const submit = popups.querySelectorAll('.form');
const profileName = content.querySelector('.profile__name');
const profileJob = content.querySelector('.profile__job');
const inputName = popups.querySelector('.form__input_name');
const inputJob = popups.querySelector('.form__input_job');
const elementsList = content.querySelector('.elements__list');
const deleteBtn = document.querySelector('.elements__del-btn');
const editPopup = popups.querySelector('.popup_edit-profile');
const newItemPopup = popups.querySelector('.popup_add-cards');

// TODO      создать отдельные функции
function addDefaultCards() {
  const cardTemplate = document.querySelector('.cards-template').content;
  const cardElementsArray = [];

  initialCards.forEach(function(object) {
    const cardElement = cardTemplate.querySelector('.elements__list-item').cloneNode(true);
    const cardTitle = cardElement.querySelector('.elements__caption-text');
    const cardLink = cardElement.querySelector('.elements__image');

    cardTitle.textContent = object.name;
    cardLink.src = object.link;

    cardElement.querySelector('.elements__button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__button_active');
    });

    cardElementsArray.push(cardElement);
  });

  cardElementsArray.forEach(function(el) {
    elementsList.prepend(el);
  });
}

addDefaultCards();
//!
function getCardElement(data) {   // TODO
  const cardTemplate = document.querySelector('.cards-template').content;

  function createCard (name, link) {
    const cardElement = cardTemplate.querySelector('.elements__list-item').cloneNode(true);
    const cardTitle = cardElement.querySelector('.elements__caption-text');
    const cardLink = cardElement.querySelector('.elements__image');
  }
}   // TODO

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

function editFormHandler() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  openPopup(editPopup);
}

function addFormHandler() {
  openPopup(newItemPopup);
}

function closeEditForm() {
  closePopup(editPopup);
}

function closeAddForm() {
  closePopup(newItemPopup);
}

function submitEditFormHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeEditForm();
}

editBtn.addEventListener('click', editFormHandler);
addBtn.addEventListener('click', addFormHandler);
// !слушатель кнопки закрытия формы профиля
closeBtn[0].addEventListener('click', closeEditForm);
// !слушатель кнопки закрытия формы добавления карточек
closeBtn[1].addEventListener('click', closeAddForm);
// !слушатель отправки формы профиля
submit[0].addEventListener('submit', submitEditFormHandler);
// submit[1].addEventListener('submit', submitAddCardForm);
