const content = document.querySelector('.content');
const popups = document.querySelector('.popups-wrapper');
const editPopup = popups.querySelector('.popup_type_edit-profile');
const profileName = content.querySelector('.profile__name');
const profileJob = content.querySelector('.profile__job');
const inputName = popups.querySelector('.form__input_name');
const inputJob = popups.querySelector('.form__input_job');
const addPopup = popups.querySelector('.popup_type_add-cards');
const viewPopup = popups.querySelector('.popup_type_view')
const editBtn = content.querySelector('.profile__edit-button');
const addBtn = content.querySelector('.profile__add-button');
const closeBtn = popups.querySelectorAll('.popup__close-button');
const submitForm = popups.querySelectorAll('.form');
const cardTemplate = document.querySelector('.cards-template').content;

function createCardElement (cardTitle, cardLink) {
  const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
  const likeBtn = cardTemplateElement.querySelector('.cards__button');
  const delBtn = cardTemplateElement.querySelector('.cards__del-btn');
  const cardImage = cardTemplateElement.querySelector('.cards__image')

  cardTemplateElement.querySelector('.cards__caption-text').textContent = cardTitle;
  cardImage.src = cardLink;
  cardImage.alt = cardTitle;

  likeBtn.addEventListener('click', function(evt) {
    evt.target.classList.toggle('cards__button_active');
  });

  delBtn.addEventListener('click', function(evt) {
    evt.target.closest('.cards__list-item').remove();
  });

  cardImage.addEventListener('click', function(evt){
    const viewImage = popups.querySelector('.popup__view-image');
    const viewCaption = popups.querySelector('.popup__view-caption');

    viewImage.src = evt.target.currentSrc;
    viewImage.alt = evt.target.alt;
    viewCaption.textContent = evt.target.alt;

    viewPopup.classList.add('popup_opened');
  })

  return cardTemplateElement;
};

function renderCard(data) {
  const name = data.name;
  const link = data.link;
  const card = createCardElement(name, link);
  const wrapElement = content.querySelector('.cards__list');

  wrapElement.prepend(card);
}

initialCards.forEach(function(obj) {
  renderCard(obj);
})


function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

function openEditFormHandler() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  openPopup(editPopup);
}

function openAddFormHandler() {
  openPopup(addPopup);
}

function closeEditForm() {
  closePopup(editPopup);
}

function closeAddForm() {
  closePopup(addPopup);
}

function closeViewPopup() {
  closePopup(viewPopup);
}

function submitEditFormHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;

  closeEditForm();
}

function submitAddFormHandler(evt) {
  evt.preventDefault();

  const cardNameInput = popups.querySelector('.form__input_place-name');
  const cardLinkInput = popups.querySelector('.form__input_link');
  const cardObject = {};

  cardObject.name = cardNameInput.value;
  cardObject.link = cardLinkInput.value;

  renderCard(cardObject);

  closeAddForm();

  cardNameInput.value = '';
  cardLinkInput.value = '';
}

editBtn.addEventListener('click', openEditFormHandler);
addBtn.addEventListener('click', openAddFormHandler);
// !слушатель кнопки закрытия формы профиля
closeBtn[0].addEventListener('click', closeEditForm);
// !слушатель кнопки закрытия формы добавления карточек
closeBtn[1].addEventListener('click', closeAddForm);
closeBtn[2].addEventListener('click', closeViewPopup);
// !слушатель отправки формы профиля
submitForm[0].addEventListener('submit', submitEditFormHandler);
submitForm[1].addEventListener('submit', submitAddFormHandler);
