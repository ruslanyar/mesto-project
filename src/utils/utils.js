export function setSubmitterLoadingStatus(submitter) {
  submitter.textContent = 'Сохранение...';
  submitter.disabled = true;
}

export function setSubmitterDefaultStatus(submitter) {
  submitter.textContent = 'Сохранить';
  submitter.classList.add('form__submit-btn_disabled');
}

export function setSubmitterErrorStatus(submitter) {
  submitter.textContent = 'Ошибка! Попробуйте ещё раз';
  submitter.disabled = false;
}
