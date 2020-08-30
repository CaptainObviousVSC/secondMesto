
import {Popup} from "./Popup.js";

export class PopupWithSubmit extends Popup {

constructor(popupSelector) {
    super(popupSelector)
}

setEventListeners() {
    super. setEventListeners();
    this._popup.addEventListeners('submit', (evt) => {
        evt.preventDefault()
        this._handleSubmitCallback()
    })
}

setSubmitAction(submitAction) {
    this. _handleSubmitCallback = submitAction;
}
}