export default class FormValidator {
  constructor(
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      disabledButtonClass,
      inputErrorClass,
      errorIsActiveClass,
    },
    formElement
  ) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._disabledButtonClass = disabledButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorIsActiveClass = errorIsActiveClass;
    this._formElement = formElement;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });

    
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorIsActiveClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorIsActiveClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    const inputIsValid = inputElement.validity.valid;

    if (!inputIsValid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._disabledButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._disabledButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }
}
