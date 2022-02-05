const isConfirmPopup = (submitter) => {
  return submitter.closest('.popup').classList.contains('popup_type_confirm-delete');
}

export function setSubmitterLoadingStatus(submitter) {
  submitter.textContent = 'Сохранение...';
  submitter.setAttribute('disabled', true);
}

export function setSubmitterDefaultStatus(submitter) {
  if (isConfirmPopup(submitter)) {
    submitter.textContent = 'Да';
    submitter.removeAttribute('disabled');
  } else {
    submitter.textContent = 'Сохранить';
    submitter.classList.add('form__submit-btn_disabled');
  }
}

export function setSubmitterErrorStatus(submitter) {
  submitter.textContent = 'Ошибка! Попробуйте ещё раз';
  submitter.removeAttribute('disabled');
}
