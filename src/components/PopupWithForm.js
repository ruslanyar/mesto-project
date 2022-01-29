import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(
    {
      popupSelector,
      popupIsOpenedClass,
      closeBtnClass,
      formSelector,
      inputSelector,
    },
    handleFormSubmit
  ) {
    super({ popupSelector, popupIsOpenedClass, closeBtnClass });

    this._handleFormSubmit = handleFormSubmit;
    this._formElement = super._popupElement.querySelector(formSelector);
    this._inputList = this._formElement.querySelectorAll(inputSelector);
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._getInputValues();

      this._handleFormSubmit(this._inputValues);
    });
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
