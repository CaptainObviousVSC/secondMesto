import {Popup} from './Popup.js'
export class PopupWithImage extends Popup {
constructor(popupSelector) {
super(popupSelector)
this._popupImage = this._popup.querySelector('.popup__img')
this._popupName = this._popup.querySelector('.popup__box-title')
}
open(data) {
    
    this._popupName.textContent = data.name;
    this._popupImage.src = data.link;
    this._popupImage.textContent = data.name;
    super.open()
}

} 