export class UserInfo {
    constructor({name: nameSelector, about: aboutSelector, openAvatar: avatarSelector}) {
        this._profileName = document.querySelector(nameSelector)
        this._profileDescription = document.querySelector(aboutSelector)
        this._profileAvatar = document.querySelector(avatarSelector)
    }
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            about: this._profileDescription.textContent,
            openAvatar: this._profileAvatar.style.backgroundImage
        }
    }
    setUserInfo({name, about, openAvatar}) {
        if (name) {
            this._profileName.textContent = name
        }
        if(about) {
            this._profileDescription.textContent = about
        }
        if(openAvatar) {
            this._profileAvatar.style.backgroundImage = `url(${openAvatar})`
        }
    }
}