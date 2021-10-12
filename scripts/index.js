const content = document.querySelector('.content');
const popups = document.querySelector('.popups-wrapper');
const editBtn = content.querySelector('.profile__edit-button');
const addBtn = content.querySelector('.profile__add-button');
const closeBtn = popups.querySelectorAll('.popup__close-button');
const submit = popups.querySelectorAll('.form');

let profileName = content.querySelector('.profile__name');
let profileJob = content.querySelector('.profile__job');
let inputName = popups.querySelector('.form__input_name');
let inputJob = popups.querySelector('.form__input_job');

// функция открытия формы профиля
function editFormHandler() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  popups.querySelector('.popup_edit-profile').classList.add('popup_opened');
}

// функция закрытия форм
function closeForm() {
  popups.querySelector('.popup_edit-profile').classList.remove('popup_opened');
  popups.querySelector('.popup_add-cards').classList.remove('popup_opened');
}

function submitFormHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeForm();
}

function addFormHandler() {
  popups.querySelector('.popup_add-cards').classList.add('popup_opened');
}
// функция создания новой карточки
function createCard() {
  const cardTemplate = document.querySelector('.cards-template').content;
  const cardElement = cardTemplate.querySelector('.elements__list-item').cloneNode(true);

  content.querySelector('.elements__list').prepend(cardElement);
}

function submitAddCardForm(evt) {
  evt.preventDefault();

  createCard();
  closeForm();
}

editBtn.addEventListener('click', editFormHandler);
addBtn.addEventListener('click', addFormHandler);
// слушатель кнопки закрытия формы профиля
closeBtn[0].addEventListener('click', closeForm);
// слушатель кнопки закрытия формы добавления карточек
closeBtn[1].addEventListener('click', closeForm);
// слушатель отправки формы профиля
submit[0].addEventListener('submit', submitFormHandler);
submit[1].addEventListener('submit', submitAddCardForm);
