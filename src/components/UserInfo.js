export default class UserInfo {
  constructor(
    { profileNameSelector, profileJobSelector, profileAvatarSelector },
    { handleGetUser, handleSetUser, handleSetAvatar }
  ) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._jobElement = document.querySelector(profileJobSelector);
    this._avatarElement = document.querySelector(profileAvatarSelector);
    this._handleGetUser = handleGetUser;
    this._handleSetUser = handleSetUser;
    this._handleSetAvatar = handleSetAvatar;
  }

  getUserInfo() {
    return this._handleGetUser();
  }

  setUserInfo(name, job) {
    return this._handleSetUser(name, job);
  }

  setAvatar(avatar) {
    return this._handleSetAvatar(avatar);
  }

  updateUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._jobElement.textContent = data.about;
    this._avatarElement.src = data.avatar;
    this._userId = data._id;
  }

  getUserId() {
    return this._userId;
  }
}
