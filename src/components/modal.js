import { keyHandler } from './utils.js';

export function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  window.addEventListener('keydown', keyHandler);
}

export function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  window.removeEventListener('keydown', keyHandler);
}
