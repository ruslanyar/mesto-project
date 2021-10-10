const content = document.querySelector('.content');
const popups = document.querySelector('#popups');
const editBtn = content.querySelector('.profile__edit-button');
const addBtn = content.querySelector('.profile__add-button');

const closeBtn = popups.querySelectorAll('.popup__close-button');
const submitBtn = popups.querySelectorAll('.form__submit-btn');

let profileName = content.querySelector('.profile__name');
let profileJob = content.querySelector('.profile__job');
let inputName = popups.querySelector('#name');
let inputJob = popups.querySelector('#job');

// функция открытия формы профиля
function editFormHandler() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  popups.querySelector('#profileEdit').classList.add('popup_opened');
}

// функция закрытия формы
function closeForm() {
  popups.querySelector('#profileEdit').classList.remove('popup_opened');
  popups.querySelector('#addCards').classList.remove('popup_opened');
}

function submitFormHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeForm();
}

function addFormHandler() {
  popups.querySelector('#addCards').classList.add('popup_opened');
}

editBtn.addEventListener('click', editFormHandler);
addBtn.addEventListener('click', addFormHandler);
// слушатель кнопки закрытия формы профиля
closeBtn[0].addEventListener('click', closeForm);
// слушатель кнопки закрытия формы добавления карточек
closeBtn[1].addEventListener('click', closeForm);
submitBtn[0].addEventListener('click', submitFormHandler);
