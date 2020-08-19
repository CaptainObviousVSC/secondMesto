import {Popup} from './Popup.js'
import { popupImage, popupName} from '../scripts/index.js'
export class PopupWithImage extends Popup {
constructor(popupSelector) {
super(popupSelector)
}
open(data) {
    popupName.textContent = data.nameOf;
    popupImage.src = data.link;
    super.open()
}

} 