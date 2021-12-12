const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
}

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement) => {
  const inputIsValid = inputElement.validity.valid;

  if (!inputIsValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit-btn_disabled');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('form__submit-btn_disabled');
    buttonElement.removeAttribute('disabled');
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-btn');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

const enableValidation = () => {
  const formList = Array.from(forms);

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

      if (formElement.classList.contains('form_type_edit-profile-form')) {
        submitEditProfileFormElementHandler();
      } else if (formElement.classList.contains('form_type_add-card-form')) {
        submitAddCardFormElementHandler();
      } else if (formElement.classList.contains('form_type_edit-avatar-form')) {
        submitEditAvatarFormElementHandler();
      }
    });

    setEventListeners(formElement);
  });
}

enableValidation();
