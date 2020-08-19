export class UserInfo {
    constructor({name, about}) {
        this._profileName = name
        this._profileDescription = about
    }
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            about: this._profileDescription.textContent
        }
    }
    setUserInfo({name, about}) {
        this._profileName.textContent = name
        this._profileDescription.textContent= about
    }
}