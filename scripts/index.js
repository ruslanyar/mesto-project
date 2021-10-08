const content = document.querySelector('.content');
const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.profile__edit-button');
const closeBtn = popup.querySelector('.popup__close-button');
const submitBtn =popup.querySelector('.edit-profile__submit-button');

let profileName = content.querySelector('.profile__name');
let profileJob = content.querySelector('.profile__job');
let inputName = popup.querySelector('.edit-profile__input_name');
let inputJob = popup.querySelector('.edit-profile__input_job');

function editProfile() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  popup.classList.add('popup_opened');
}

function closeForm() {
  popup.classList.remove('popup_opened');
}

function formSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeForm();
}

editBtn.addEventListener('click', editProfile);
closeBtn.addEventListener('click', closeForm);
submitBtn.addEventListener('click', formSubmit);

