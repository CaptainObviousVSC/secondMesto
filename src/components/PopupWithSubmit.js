
import {Popup} from "./Popup.js";

export class PopupWithSubmit extends Popup {

constructor(popupSelector) {
    super(popupSelector)

}

setEventListeners() {
    console.log(this._popup)
    this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault()
        this._handleSubmitCallback()
    })
     super.setEventListeners()
}

setSubmitAction(submitAction) {
    this. _handleSubmitCallback = submitAction;
}
}