(()=>{"use strict";var e=document.querySelector(".content"),t=document.querySelector(".popups-wrapper"),n=document.querySelector(".cards-template").content,r=e.querySelector(".cards__list"),o=t.querySelectorAll(".popup"),a={baseURL:"https://nomoreparties.co/v1/plus-cohort-5",headers:{authorization:"15bc8486-d99e-482f-a261-777fcdb33804","Content-Type":"application/json"},id:"1fc4c54d52ca7aa60de1feee"},c={editProfilePopup:t.querySelector(".popup_type_edit-profile"),addCardPopup:t.querySelector(".popup_type_add-cards"),viewPopup:t.querySelector(".popup_type_view"),editAvatarPopup:t.querySelector(".popup_type_edit-avatar")},i={openEditPopupBtnElement:e.querySelector(".profile__edit-button"),openAddPopupBtnElement:e.querySelector(".profile__add-button"),openAvatarPopupElement:e.querySelector(".profile__overlay"),inputNameElement:t.querySelector("#name-input"),inputJobElement:t.querySelector("#job-input"),profileNameElement:e.querySelector(".profile__name"),profileJobElement:e.querySelector(".profile__job"),inputCardPlaceElement:t.querySelector("#place-input"),inputCardLinkElement:t.querySelector("#link-input"),avatarImage:e.querySelector(".profile__avatar")},u={formSelector:".form",editProfileFormClass:"form_type_edit-profile-form",addCardFormClass:"form_type_add-card-form",editAvatarFormClass:"form_type_edit-avatar-form",inputSelector:".form__input",submitButtonSelector:".form__submit-btn",disabledButtonClass:"form__submit-btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function s(e){e.classList.add("popup_opened"),window.addEventListener("keydown",_)}function l(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",_)}function d(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function p(){return fetch("".concat(a.baseURL,"/cards"),{headers:a.headers}).then(d)}function f(e,r,o){var i,u,l=n.querySelector(".cards__list-item").cloneNode(!0),f=l.querySelector(".cards__image"),m=l.querySelector(".cards__caption-text"),_=l.querySelector(".cards__like-btn"),v=l.querySelector(".cards__like-count");return m.textContent=e,f.src=r,f.alt=e,v.textContent=o.likes.length,o.owner._id===a.id&&(i=l,u=function(e){var t=document.createElement("button");return t.setAttribute("type","button"),t.setAttribute("aria-label","Удалить"),t.classList.add("cards__del-btn"),t.addEventListener("click",(function(t){var n;(n=e._id,fetch("".concat(a.baseURL,"/cards/").concat(n),{method:"DELETE",headers:a.headers}).then(d)).then((function(){t.target.parentNode.remove()})).catch((function(e){return console.log(e)}))})),t}(o),i.append(u)),E(o)&&_.classList.add("cards__like-btn_active"),_.addEventListener("click",(function(e){p().then((function(e){return e.find((function(e){return e._id===o._id}))})).then((function(t){!function(e,t,n){var r;E(e)?(r=e._id,fetch("".concat(a.baseURL,"/cards/likes/").concat(r),{method:"DELETE",headers:a.headers}).then(d)).then((function(e){t.textContent=e.likes.length,n.target.classList.remove("cards__like-btn_active")})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(a.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:a.headers}).then(d)}(e._id).then((function(e){t.textContent=e.likes.length,n.target.classList.add("cards__like-btn_active")})).catch((function(e){return console.log(e)}))}(t,v,e)})).catch((function(e){return console.log(e)}))})),f.addEventListener("click",(function(e){var n=t.querySelector(".popup__view-image"),r=t.querySelector(".popup__view-caption");n.src=e.target.currentSrc,n.alt=e.target.alt,r.textContent=e.target.alt,s(c.viewPopup)})),l}function m(e,t){var n=f(e.name,e.link,e);t.prepend(n)}function _(e){"Escape"===e.key&&l(t.querySelector(".popup_opened"))}function v(e,t){e.disabled=t,e.textContent=t?"Сохранение...":"Сохранить"}function h(e){var t,n;v(e.submitter,!0),(t=i.inputNameElement.value,n=i.inputJobElement.value,fetch("".concat(a.baseURL,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})}).then(d)).then((function(e){i.profileNameElement.textContent=e.name,i.profileJobElement.textContent=e.about})).catch((function(e){return console.log(e)})).finally((function(){v(e.submitter,!1),e.submitter.classList.add(u.disabledButtonClass),l(c.editProfilePopup)}))}function b(e){var n,o,s=t.querySelector(".".concat(u.addCardFormClass));v(e.submitter,!0),(n=i.inputCardPlaceElement.value,o=i.inputCardLinkElement.value,fetch("".concat(a.baseURL,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:n,link:o})}).then(d)).then((function(e){m(e,r)})).catch((function(e){return console.log(e)})).finally((function(){v(e.submitter,!1),e.submitter.classList.add(u.disabledButtonClass),l(c.addCardPopup),s.reset()}))}function y(e){var n,r=t.querySelector(".".concat(u.editAvatarFormClass)),o=r.querySelector(".form__input");v(e.submitter,!0),(n=o.value,fetch("".concat(a.baseURL,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:n})}).then(d)).then((function(e){i.avatarImage.src=e.avatar})).catch((function(e){return console.log(e)})).finally((function(){v(e.submitter,!1),l(c.editAvatarPopup),r.reset()}))}function E(e){return e.likes.some((function(e){return e._id==a.id}))}var C=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.disabledButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.disabledButtonClass),t.setAttribute("disabled",!0))};fetch("".concat(a.baseURL,"/users/me"),{headers:a.headers}).then(d).then((function(e){i.profileNameElement.textContent=e.name,i.profileJobElement.textContent=e.about,i.avatarImage.src=e.avatar})).catch((function(e){return console.log(e)})),p().then((function(e){e.reverse().forEach((function(e){m(e,r)}))})).catch((function(e){return console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(n){n.preventDefault(),t.classList.contains(e.editProfileFormClass)?h(n):t.classList.contains(e.addCardFormClass)?b(n):t.classList.contains(e.editAvatarFormClass)&&y(n)})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);C(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(a){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),C(n,r,t)}))}))}(t,e)}))}(u),i.openEditPopupBtnElement.addEventListener("click",(function(){i.inputNameElement.value=i.profileNameElement.textContent,i.inputJobElement.value=i.profileJobElement.textContent,s(c.editProfilePopup)})),i.openAddPopupBtnElement.addEventListener("click",(function(){return s(c.addCardPopup)})),i.openAvatarPopupElement.addEventListener("click",(function(){return s(c.editAvatarPopup)})),o.forEach((function(e){e.addEventListener("click",(function(e){!function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-button"))&&l(e.currentTarget)}(e)}))}))})();