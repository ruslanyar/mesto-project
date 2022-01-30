import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({
    popupIsOpenedClass,
    closeBtnClass,
    imageSelector,
    imageCaptionSelector,
  }, popupSelector) {
    super({ popupIsOpenedClass, closeBtnClass }, popupSelector);

    this._image = this._popupElement.querySelector(imageSelector);
    this._imageCaption = this._popupElement.querySelector(imageCaptionSelector);
  }

  open(cardLink, cardName) {
    this._image.src = cardLink;
    this._image.alt = cardName;
    this._imageCaption.textContent = cardName;

    super.open();
  }
}
