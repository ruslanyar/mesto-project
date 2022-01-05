(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>g});var t=document.querySelector(".content"),n=document.querySelector(".popups-wrapper"),r=document.querySelector(".cards-template").content,o=t.querySelector(".cards__list"),a=n.querySelectorAll(".popup"),i=document.forms.profile,c=document.forms.addCard,u=document.forms.avatar,s=document.forms.confirm,l={baseURL:"https://nomoreparties.co/v1/plus-cohort-5",headers:{authorization:"15bc8486-d99e-482f-a261-777fcdb33804","Content-Type":"application/json"}},d={editProfilePopup:n.querySelector(".popup_type_edit-profile"),addCardPopup:n.querySelector(".popup_type_add-cards"),viewPopup:n.querySelector(".popup_type_view"),editAvatarPopup:n.querySelector(".popup_type_edit-avatar")},p={openEditPopupBtnElement:t.querySelector(".profile__edit-button"),openAddPopupBtnElement:t.querySelector(".profile__add-button"),openAvatarPopupElement:t.querySelector(".profile__overlay"),inputNameElement:n.querySelector("#name-input"),inputJobElement:n.querySelector("#job-input"),profileNameElement:t.querySelector(".profile__name"),profileJobElement:t.querySelector(".profile__job"),inputCardPlaceElement:n.querySelector("#place-input"),inputCardLinkElement:n.querySelector("#link-input"),avatarImage:t.querySelector(".profile__avatar")},m={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-btn",disabledButtonClass:"form__submit-btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function f(e){e.classList.add("popup_opened"),window.addEventListener("keydown",C)}function b(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",C)}function v(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var _=n.querySelector(".popup__view-image"),y=n.querySelector(".popup__view-caption"),h=s.querySelector(".form__submit-btn");function E(e,t){var n=function(e,t,n){var o=r.querySelector(".cards__list-item").cloneNode(!0),a=o.querySelector(".cards__image"),i=o.querySelector(".cards__caption-text"),c=o.querySelector(".cards__like-btn"),u=o.querySelector(".cards__like-count"),p=o.querySelector(".cards__del-btn"),m=function e(){var t;h.textContent="Удаление...",h.disabled=!0,(t=n._id,fetch("".concat(l.baseURL,"/cards/").concat(t),{method:"DELETE",headers:l.headers}).then(v)).then((function(){s.removeEventListener("submit",e),o.remove(),b(d.confirmDeletePopup),h.textContent="Да"})).catch((function(e){console.log(e),h.textContent="Ошибка! Попробуйте ещё раз"})).finally((function(){h.disabled=!1}))};return d.confirmDeletePopup.addEventListener("click",(function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-button"))&&s.removeEventListener("submit",m)})),i.textContent=e,a.src=t,a.alt=e,u.textContent=n.likes.length,n.owner._id!==g&&p.remove(),p.addEventListener("click",(function(e){f(d.confirmDeletePopup),s.addEventListener("submit",m)})),L(n)&&c.classList.add("cards__like-btn_active"),c.addEventListener("click",(function(e){var t;L(n)?(t=n._id,fetch("".concat(l.baseURL,"/cards/likes/").concat(t),{method:"DELETE",headers:l.headers}).then(v)).then((function(t){n=t,u.textContent=t.likes.length,e.target.classList.remove("cards__like-btn_active")})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(l.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:l.headers}).then(v)}(n._id).then((function(t){n=t,u.textContent=t.likes.length,e.target.classList.add("cards__like-btn_active")})).catch((function(e){return console.log(e)}))})),a.addEventListener("click",(function(e){_.src=e.target.currentSrc,_.alt=e.target.alt,y.textContent=e.target.alt,f(d.viewPopup)})),o}(e.name,e.link,e);t.prepend(n)}var S=u.querySelector(".form__input");function C(e){"Escape"===e.key&&b(n.querySelector(".popup_opened"))}function L(e){return e.likes.some((function(e){return e._id==g}))}var g,q=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.disabledButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.disabledButtonClass),t.setAttribute("disabled",!0))};function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([fetch("".concat(l.baseURL,"/users/me"),{headers:l.headers}).then(v),fetch("".concat(l.baseURL,"/cards"),{headers:l.headers}).then(v)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],i=r[1];g=a._id,p.profileNameElement.textContent=a.name,p.profileJobElement.textContent=a.about,p.avatarImage.src=a.avatar,i.reverse().forEach((function(e){E(e,o)}))})).catch((function(e){return console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);q(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(a){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),q(n,r,t)}))}))}(t,e)}))}(m),p.openEditPopupBtnElement.addEventListener("click",(function(){p.inputNameElement.value=p.profileNameElement.textContent,p.inputJobElement.value=p.profileJobElement.textContent,f(d.editProfilePopup)})),p.openAddPopupBtnElement.addEventListener("click",(function(){return f(d.addCardPopup)})),p.openAvatarPopupElement.addEventListener("click",(function(){return f(d.editAvatarPopup)})),i.addEventListener("submit",(function(e){return function(e){var t,n;e.submitter.textContent="Сохранение...",e.submitter.disabled=!0,(t=p.inputNameElement.value,n=p.inputJobElement.value,fetch("".concat(l.baseURL,"/users/me"),{method:"PATCH",headers:l.headers,body:JSON.stringify({name:t,about:n})}).then(v)).then((function(t){p.profileNameElement.textContent=t.name,p.profileJobElement.textContent=t.about,e.submitter.classList.add(m.disabledButtonClass),e.submitter.textContent="Сохранить",b(d.editProfilePopup),i.reset()})).catch((function(t){console.log(t),e.submitter.textContent="Ошибка! Попробуйте ещё раз",e.submitter.disabled=!1}))}(e)})),c.addEventListener("submit",(function(e){return function(e){var t,n;e.submitter.textContent="Сохранение...",e.submitter.disabled=!0,(t=p.inputCardPlaceElement.value,n=p.inputCardLinkElement.value,fetch("".concat(l.baseURL,"/cards"),{method:"POST",headers:l.headers,body:JSON.stringify({name:t,link:n})}).then(v)).then((function(t){E(t,o),e.submitter.classList.add(m.disabledButtonClass),e.submitter.textContent="Создать",b(d.addCardPopup),c.reset()})).catch((function(t){console.log(t),e.submitter.textContent="Ошибка! Попробуйте ещё раз",e.submitter.disabled=!1}))}(e)})),u.addEventListener("submit",(function(e){return function(e){var t;e.submitter.textContent="Сохранение...",e.submitter.disabled=!0,(t=S.value,fetch("".concat(l.baseURL,"/users/me/avatar"),{method:"PATCH",headers:l.headers,body:JSON.stringify({avatar:t})}).then(v)).then((function(t){p.avatarImage.src=t.avatar,e.submitter.classList.add(m.disabledButtonClass),e.submitter.textContent="Сохранить",b(d.editAvatarPopup),u.reset()})).catch((function(t){console.log(t),e.submitter.textContent="Ошибка! Попробуйте ещё раз",e.submitter.disabled=!1}))}(e)})),a.forEach((function(e){e.addEventListener("click",(function(e){!function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-button"))&&b(e.currentTarget)}(e)}))}))})();