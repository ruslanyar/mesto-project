export function submitEditProfileFormHandler(evt) {
  evt.submitter.textContent = 'Сохранение...';
  evt.submitter.disabled = true;

  patchProfileData(configModal.inputNameElement.value, configModal.inputJobElement.value)
    .then((res) => {
      configModal.profileNameElement.textContent = res.name;
      configModal.profileJobElement.textContent = res.about;
      evt.submitter.classList.add(configValidate.disabledButtonClass);
      evt.submitter.textContent = 'Сохранить';
      closePopup(objectPopup.editProfilePopup);
      editProfileForm.reset();
    })
    .catch(err => {
      console.log(err);
      evt.submitter.textContent = 'Ошибка! Попробуйте ещё раз';
      evt.submitter.disabled = false;
    })
}

export function submitAddCardFormHandler(evt) {
  evt.submitter.textContent = 'Сохранение...';
  evt.submitter.disabled = true;

  postNewCard(configModal.inputCardPlaceElement.value, configModal.inputCardLinkElement.value)
    .then((card) => {
      renderCard(card, wrapElement);
      evt.submitter.classList.add(configValidate.disabledButtonClass);
      evt.submitter.textContent = 'Создать';
      closePopup(objectPopup.addCardPopup);
      addCardForm.reset();
    })
    .catch(err => {
      console.log(err);
      evt.submitter.textContent = 'Ошибка! Попробуйте ещё раз';
      evt.submitter.disabled = false;
    })
}

export function submitEditAvatarFormHandler(evt) {
  evt.submitter.textContent = 'Сохранение...';
  evt.submitter.disabled = true;

  patchAvatar(inputEditAvatar.value)
    .then((res) => {
      configModal.avatarImage.src = res.avatar;
      evt.submitter.classList.add(configValidate.disabledButtonClass);
      evt.submitter.textContent = 'Сохранить';
      closePopup(objectPopup.editAvatarPopup);
      editAvatarForm.reset();
    })
    .catch(err => {
      console.log(err);
      evt.submitter.textContent = 'Ошибка! Попробуйте ещё раз';
      evt.submitter.disabled = false;
    })
}
