(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseURL,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseURL=n,this._headers=r}var n,r;return n=t,(r=[{key:"getUser",value:function(e){var t=this;return fetch("".concat(this._baseURL).concat(e),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseURL).concat(e),{headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"patchProfile",value:function(e,t,n){var r=this;return fetch("".concat(this._baseURL).concat(n),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return r._checkResponse(e)}))}},{key:"patchAvatar",value:function(e,t){var n=this;return fetch("".concat(this._baseURL).concat(t),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return n._checkResponse(e)}))}},{key:"postNewCard",value:function(e,t,n){var r=this;return fetch("".concat(this._baseURL).concat(n),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return r._checkResponse(e)}))}},{key:"deleteCard",value:function(e,t){var n=this;return fetch("".concat(this._baseURL).concat(t,"/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return n._checkResponse(e)}))}},{key:"putLike",value:function(e,t){var n=this;return fetch("".concat(this._baseURL).concat(t,"/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return n._checkResponse(e)}))}},{key:"deleteLike",value:function(e,t){var n=this;return fetch("".concat(this._baseURL).concat(t,"/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return n._checkResponse(e)}))}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){var i=t.name,a=t.link,s=t.owner,c=t._id,l=t.likes,u=n.templateSelector,f=n.contentSelector,h=n.likeBtnSelector,p=n.deleteBtnSelector,d=n.cardImageSelector,_=n.likeBtnIsActiveClass,m=n.likeCounterSelector,v=n.cardCaptionTextSelector,y=r.handleLike,b=r.handleDislike,k=r.handleCardImageClick,S=r.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userId=o,this._cardName=i,this._cardLink=a,this._owner=s,this._cardId=c,this._likes=l,this._templateSelector=u,this._contentSelector=f,this._likeBtnSelector=h,this._deleteBtnSelector=p,this._cardImageSelector=d,this._likeBtnIsActiveClass=_,this._likeCounterSelector=m,this._cardCaptionTextSelector=v,this._handleCardImageClick=k,this._handleLike=y,this._handleDislike=b,this._handleDeleteClick=S}var t,r;return t=e,(r=[{key:"generate",value:function(){return this._element=this._getElement(),this._setEventListeners(),this._setDeleteContext(),this._setCardImage(),this.setLikeContext(this._likes),this._element}},{key:"setLikeContext",value:function(e){this._hasLike(e)?this._likeBtn.classList.add(this._likeBtnIsActiveClass):this._likeBtn.classList.remove(this._likeBtnIsActiveClass),this._element.querySelector(this._likeCounterSelector).textContent=e.length,this._likes=e}},{key:"_getElement",value:function(){return document.querySelector(this._templateSelector).content.querySelector(this._contentSelector).cloneNode(!0)}},{key:"_setCardImage",value:function(){var e=this._element.querySelector(this._cardImageSelector);e.src=this._cardLink,e.alt=this._cardName,this._element.querySelector(this._cardCaptionTextSelector).textContent=this._cardName}},{key:"_hasLike",value:function(e){var t=this;return e.some((function(e){return e._id===t._userId}))}},{key:"_toggleLike",value:function(){this._hasLike(this._likes)?this._handleDislike(this._cardId):this._handleLike(this._cardId)}},{key:"_isOwner",value:function(){return this._owner._id===this._userId}},{key:"_setDeleteContext",value:function(){this._isOwner()||this._deleteBtn.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn=this._element.querySelector(this._likeBtnSelector),this._deleteBtn=this._element.querySelector(this._deleteBtnSelector),this._cardImage=this._element.querySelector(this._cardImageSelector),this._likeBtn.addEventListener("click",(function(){e._toggleLike()})),this._deleteBtn.addEventListener("click",(function(){e._handleDeleteClick(e._element,e._cardId)})),this._cardImage.addEventListener("click",(function(){e._handleCardImageClick()}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._container.prepend(t)}},{key:"_clear",value:function(){this._container.innerHTML=""}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.formSelector,o=t.inputSelector,i=t.submitButtonSelector,a=t.disabledButtonClass,s=t.inputErrorClass,c=t.errorIsActiveClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=r,this._inputSelector=o,this._submitButtonSelector=i,this._disabledButtonClass=a,this._inputErrorClass=s,this._errorIsActiveClass=c,this._formElement=n}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._formElement.querySelectorAll(this._inputSelector)),n=this._formElement.querySelector(this._submitButtonSelector);this._toggleButtonState(t,n),t.forEach((function(r){r.addEventListener("input",(function(){e._checkInputValidity(r),e._toggleButtonState(t,n)}))}))}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorIsActiveClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorIsActiveClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._disabledButtonClass),t.setAttribute("disabled",!0)):(t.classList.remove(this._disabledButtonClass),t.removeAttribute("disabled"))}}])&&a(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.profileNameSelector,o=t.profileJobSelector,i=t.profileAvatarSelector,a=n.handleGetUser,s=n.handleSetUser,c=n.handleSetAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(r),this._jobElement=document.querySelector(o),this._avatarElement=document.querySelector(i),this._handleGetUser=a,this._handleSetUser=s,this._handleSetAvatar=c}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._handleGetUser()}},{key:"setUserInfo",value:function(e,t){return this._handleSetUser(e,t)}},{key:"setAvatar",value:function(e){return this._handleSetAvatar(e)}},{key:"updateUserInfo",value:function(e){this._nameElement.textContent=e.name,this._jobElement.textContent=e.about,this._avatarElement.src=e.avatar,this._userId=e._id}},{key:"getUserId",value:function(){return this._userId}}])&&c(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){var r,o,i=this,a=t.popupIsOpenedClass,s=t.closeBtnClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){"Escape"===e.key&&i.close()},(r="_handleEscClose")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._popupElement=document.querySelector(n),this._popupIsOpenedClass=a,this._closeBtnClass=s}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains(e._closeBtnClass))&&e.close()}))}},{key:"open",value:function(){this._popupElement.classList.add(this._popupIsOpenedClass),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove(this._popupIsOpenedClass),window.removeEventListener("keydown",this._handleEscClose)}}])&&u(t.prototype,n),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t,n){var r,o=e.popupIsOpenedClass,s=e.closeBtnClass,c=e.formSelector,l=e.inputSelector,u=e.submitBtnSelector,f=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,{popupIsOpenedClass:o,closeBtnClass:s},n))._handleFormSubmit=f,r._formElement=r._popupElement.querySelector(c),r._inputList=r._formElement.querySelectorAll(l),r.submitButton=r._formElement.querySelector(u),r}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;d(y(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._getInputValues(),e._handleFormSubmit(e._inputValues)}))}},{key:"setInputValue",value:function(e,t){this._formElement.elements[e].value=t}},{key:"close",value:function(){d(y(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"_getInputValues",value:function(){var e=this;this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value}))}}])&&p(t.prototype,n),a}(f);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function I(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n,r=e.popupIsOpenedClass,o=e.closeBtnClass,s=e.imageSelector,c=e.imageCaptionSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,{popupIsOpenedClass:r,closeBtnClass:o},t))._image=n._popupElement.querySelector(s),n._imageCaption=n._popupElement.querySelector(c),n}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.alt=t,this._imageCaption.textContent=t,g(w(a.prototype),"open",this).call(this)}}])&&S(t.prototype,n),a}(f),B={templateSelector:".cards-template",contentSelector:".cards__list-item",likeBtnSelector:".cards__like-btn",deleteBtnSelector:".cards__del-btn",cardImageSelector:".cards__image",likeBtnIsActiveClass:"cards__like-btn_active",likeCounterSelector:".cards__like-count",cardCaptionTextSelector:".cards__caption-text"},O={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-btn",disabledButtonClass:"form__submit-btn_disabled",inputErrorClass:"form__input_type_error",errorIsActiveClass:"form__input-error_active"},j={popupIsOpenedClass:"popup_opened",closeBtnClass:"popup__close-button",imageSelector:".popup__view-image",imageCaptionSelector:".popup__view-caption",formSelector:".form",inputSelector:".form__input",submitBtnSelector:".form__submit-btn"},A=document.querySelector(".profile__edit-button"),R=document.querySelector(".profile__add-button"),U=document.querySelector(".profile__overlay");function P(e){e.textContent="Сохранение...",e.setAttribute("disabled",!0)}function x(e){!function(e){return e.closest(".popup").classList.contains("popup_type_confirm-delete")}(e)?(e.textContent="Сохранить",e.classList.add("form__submit-btn_disabled")):(e.textContent="Да",e.removeAttribute("disabled"))}function T(e){e.textContent="Ошибка! Попробуйте ещё раз",e.removeAttribute("disabled")}function q(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=new t({baseURL:"https://nomoreparties.co/v1/plus-cohort-5",headers:{authorization:"15bc8486-d99e-482f-a261-777fcdb33804","Content-Type":"application/json"}}),V=new l({profileNameSelector:".profile__name",profileJobSelector:".profile__job",profileAvatarSelector:".profile__avatar"},{handleGetUser:function(){return N.getUser("/users/me")},handleSetUser:function(e,t){return N.patchProfile(e,t,"/users/me")},handleSetAvatar:function(e){return N.patchAvatar(e,"/users/me/avatar")}}),F=new b(j,{handleFormSubmit:function(e){var t=e.firstName,n=e.job;P(F.submitButton),V.setUserInfo(t,n).then((function(e){return V.updateUserInfo(e)})).then((function(){F.close(),x(F.submitButton)})).catch((function(e){console.log(e),T(F.submitButton)}))}},".popup_type_edit-profile");F.setEventListeners();var J=new b(j,{handleFormSubmit:function(e){var t=e["profile-avatar"];P(J.submitButton),V.setAvatar(t).then((function(e){V.updateUserInfo(e)})).then((function(){J.close(),x(J.submitButton)})).catch((function(e){console.log(e),T(J.submitButton)}))}},".popup_type_edit-avatar");J.setEventListeners();var G=new b(j,{handleFormSubmit:function(e){var t=e.placeName,n=e.link;P(G.submitButton),N.postNewCard(t,n,"/cards").then((function(e){return $.addItem(e)})).then((function(){G.close(),x(G.submitButton)})).catch((function(e){console.log(e),T(G.submitButton)}))}},".popup_type_add-cards");G.setEventListeners();var H=new L(j,".popup_type_view");H.setEventListeners();var M=new b(j,{handleFormSubmit:function(){P(M.submitButton),N.deleteCard(M.cardId,"/cards").then((function(){M.cardElement.remove(),M.close(),x(M.submitButton),M.cardElement=null,M.cardId=null})).catch((function(e){console.log(e),T(M.submitButton)}))}},".popup_type_confirm-delete");M.setEventListeners();var z,$=new i({renderer:function(e){var t=new r(e,B,{handleLike:function(e){N.putLike(e,"/cards/likes").then((function(e){return t.setLikeContext(e.likes)})).catch((function(e){return console.log(e)}))},handleDislike:function(e){N.deleteLike(e,"/cards/likes").then((function(e){return t.setLikeContext(e.likes)})).catch((function(e){return console.log(e)}))},handleCardImageClick:function(){H.open(e.link,e.name)},handleDeleteClick:function(e,t){M.cardElement=e,M.cardId=t,M.open()}},V.getUserId());return t.generate()}},".cards__list");(z=document.forms,function(e){if(Array.isArray(e))return D(e)}(z)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(z)||q(z)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){new s(O,e).enableValidation()})),A.addEventListener("click",(function(){V.getUserInfo().then((function(e){F.setInputValue("firstName",e.name),F.setInputValue("job",e.about)})),x(F.submitButton),F.open()})),U.addEventListener("click",(function(){x(J.submitButton),J.open()})),R.addEventListener("click",(function(){x(G.submitButton),G.open()})),Promise.all([V.getUserInfo(),N.getInitialCards("/cards")]).then((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];V.updateUserInfo(n),$.renderItems(r)})).catch((function(e){return console.log(e)}))})();