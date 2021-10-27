const content = document.querySelector('.content');
const popups = document.querySelector('.popups-wrapper');
const editPopup = popups.querySelector('.popup_type_edit-profile');
const profileName = content.querySelector('.profile__name');
const profileJob = content.querySelector('.profile__job');
const inputName = popups.querySelector('.form__input_name');
const inputJob = popups.querySelector('.form__input_job');
const addPopup = popups.querySelector('.popup_type_add-cards');
const viewPopup = popups.querySelector('.popup_type_view');
const editBtn = content.querySelector('.profile__edit-button');
const addBtn = content.querySelector('.profile__add-button');
const closeBtnEdit = popups.querySelector('.popup__close-button_edit-form');
const closeBtnAdd = popups.querySelector('.popup__close-button_add-form');
const closeBtnView = popups.querySelector('.popup__close-button_view');
const editForm = popups.querySelector('.form_type_editForm');
const addForm = popups.querySelector('.form_type_addForm');
const cardTemplate = document.querySelector('.cards-template').content;
const wrapElement = content.querySelector('.cards__list');

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

function createCardElement (title, link) {
  const cardTemplateElement = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
  const likeBtn = cardTemplateElement.querySelector('.cards__button');
  const delBtn = cardTemplateElement.querySelector('.cards__del-btn');
  const cardImage = cardTemplateElement.querySelector('.cards__image');
  const cardTitle = cardTemplateElement.querySelector('.cards__caption-text');

  cardTitle.textContent = title;
  cardImage.src = link;
  cardImage.alt = title;

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

    openPopup (viewPopup);
  });

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

function openEditFormHandler() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

  openPopup(editPopup);
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

function closeViewPopupHandler(evt) {
  if (evt.target == evt.currentTarget || evt.target == closeBtnView) {
    closePopup(viewPopup);
  };
}

editBtn.addEventListener('click', openEditFormHandler);
addBtn.addEventListener('click', () => openPopup(addPopup));
closeBtnEdit.addEventListener('click', () => closePopup(editPopup));
closeBtnAdd.addEventListener('click', () => closePopup(addPopup));
editForm.addEventListener('submit', submitEditFormHandler);
addForm.addEventListener('submit', submitAddFormHandler);
viewPopup.addEventListener('click', closeViewPopupHandler);
