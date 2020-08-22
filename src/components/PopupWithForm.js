import {Popup} from './Popup.js'
export class PopupWithForm extends Popup {
constructor(popupSelector, formSubmitHandler) {
super(popupSelector)
this._formSubmitHandler = formSubmitHandler
}
close() {
    this._popup.querySelector('.popup__form').reset()
    super.close()
}
_getInputValues() {
    this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'))
    this._formValues = {}
    this._inputs.forEach(input => {
        this._formValues[input.name] = input.value
    })
    return this._formValues
}
setEventListeners() {
    this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
        evt.preventDefault()
        const data = this._getInputValues()
this._formSubmitHandler(data)
this.close()
    })
   
    super.setEventListeners()
}
}