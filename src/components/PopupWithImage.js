import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({
    popupSelector,
    popupIsOpenedClass,
    closeBtnClass,
    imageSelector,
    imageCaptionSelector,
  }) {
    super({ popupSelector, popupIsOpenedClass, closeBtnClass });

    this._image = super._popupElement.querySelector(imageSelector);
    this._imageCaption = super._popupElement.querySelector(imageCaptionSelector);
  }

  open(cardLink, cardName) {
    this._image.src = cardLink;
    this._imageCaption.textContent = cardName;

    super.open();
  }
}
