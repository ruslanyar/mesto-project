const content = document.querySelector('.content');
const profileEditForm = document.querySelector('#profile-edit');
const addCardsForm = document.querySelector('#add-cards');
const popup = document.querySelectorAll('.popup');
const editBtn = content.querySelector('.profile__edit-button');
const addBtn = content.querySelector('.profile__add-button');
const profileCloseBtn = document.querySelector('#profileCloseBtn');
const addCardsCloseBtn = document.querySelector('#addCardsCloseBtn');
const profileSubmitBtn = document.querySelector('#profileSubmitBtn');
const addCardsSubmitBtn = document.querySelector('#addCardsSubmitBtn');

let profileName = content.querySelector('.profile__name');
let profileJob = content.querySelector('.profile__job');
let inputName = document.querySelector('#name');
let inputJob = document.querySelector('#job');
let cardName = document.querySelectorAll('.elements__caption-text');

function editProfile() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  profileEditForm.classList.add('popup_opened');
}

function addCards() {
  addCardsForm.classList.add ('popup_opened');
}

function closeForm() {
  profileEditForm.classList.remove('popup_opened');
  addCardsForm.classList.remove('popup_opened');
}

function editFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeForm();
}

// function addFormSubmit(evt) {
//   evt.preventDefault();



//   closeForm();
// }

editBtn.addEventListener('click', editProfile);
profileCloseBtn.addEventListener('click', closeForm);
addCardsCloseBtn.addEventListener('click', closeForm);
addBtn.addEventListener('click', addCards);

