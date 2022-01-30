export default class Popup {
  constructor({ popupIsOpenedClass, closeBtnClass }, popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupIsOpenedClass = popupIsOpenedClass;
    this._closeBtnClass = closeBtnClass;
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target === evt.currentTarget ||
        evt.target.classList.contains(this._closeBtnClass)
      ) {
        this.close();
      }
    });
  }

  open() {
    this._popupElement.classList.add(this._popupIsOpenedClass);
    window.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove(this._popupIsOpenedClass);
    window.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
}
