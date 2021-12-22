const showInputError = (formElement, inputElement, errorMessage, configValidate) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(configValidate.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configValidate.errorClass);
}

const hideInputError = (formElement, inputElement, configValidate) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(configValidate.inputErrorClass);
  errorElement.classList.remove(configValidate.errorClass);
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, configValidate) => {
  const inputIsValid = inputElement.validity.valid;

  if (!inputIsValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage, configValidate);
  } else {
    hideInputError(formElement, inputElement, configValidate);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, configValidate) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(configValidate.disabledButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(configValidate.disabledButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

const setEventListeners = (formElement, configValidate) => {
  const inputList = Array.from(formElement.querySelectorAll(configValidate.inputSelector));
  const buttonElement = formElement.querySelector(configValidate.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, configValidate);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      checkInputValidity(formElement, inputElement, configValidate);
      toggleButtonState(inputList, buttonElement, configValidate);
    });
  });
}

export const enableValidation = (configValidate) => {
  const formList = Array.from(document.querySelectorAll(configValidate.formSelector));

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, configValidate);
  });
}
