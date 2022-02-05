import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(
    {
      popupIsOpenedClass,
      closeBtnClass,
      formSelector,
      inputSelector,
      submitBtnSelector,
    },
    { handleFormSubmit },
    popupSelector
  ) {
    super({ popupIsOpenedClass, closeBtnClass }, popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(formSelector);
    this._inputList = this._formElement.querySelectorAll(inputSelector);
    this.submitButton = this._formElement.querySelector(submitBtnSelector);
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._getInputValues();

      this._handleFormSubmit(this._inputValues);
    });
  }

  setInputValue(inputName, value) {
    this._formElement.elements[inputName].value = value;
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  _getInputValues() {
    this._inputValues = {};

    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
  }
}
