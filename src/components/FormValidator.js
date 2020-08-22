
export class FormValidator {
  constructor(config, myForm) {
      this._form = myForm;
      this._input = config.inputSelector
      this._submitButton = config.submitButtonSelector
      this._inactiveButton = config.inactiveButtonClass
      this._inputError  = config.inputErrorClass
      this._error = config.errorClass
      this._submitButtonActive = this._form.querySelector(this._submitButton)
  }
  clearInput() {
    this._form.reset()
  }
  enableValidation() {
    const forms = Array.from(document.querySelectorAll('.popup__form'))
   forms.forEach(form => {
        form.addEventListener('submit',  (evt) => {
            evt.preventDefault()
       })
       this._setListeners(form)
   })
}
_setListeners(form) {
  const inputs = Array.from(form.querySelectorAll(this._input))
  inputs.forEach(input => {
      input.addEventListener('input', e => {
         this._isValid(input)
          this._toggleButtonState(inputs)
    })
})
}
_isValid(input) {
  const inputName = input.getAttribute('name')
      const errorPlace = document.getElementById(`${inputName}-error`)
  if (!input.validity.valid) {
      this._showInputError(input, errorPlace)
  } else{
 this._hideInputError(input, errorPlace) 
 }
}
_showInputError( input, errorPlace)  {
  input.classList.add(this._inputError)
   errorPlace.textContent = input.validationMessage
  errorPlace.classList.add(this._error)
}
_hideInputError(input, errorPlace)  {
    input.classList.remove(this._inputError)
   errorPlace.textContent = ''
   errorPlace.classList.remove(this._error)
}
clearAllErrors() {
  const allInputs = this._form.querySelectorAll(this._input)
  allInputs.forEach(input => {
    const inputId = input.getAttribute('name')
    const errorInput = document.getElementById(`${inputId}-error`)
    errorInput.textContent = ''
    input.classList.remove(this._inputError)
  })
}
buttonInactive() {
  this._submitButtonActive.classList.add(this._inactiveButton)
  this._submitButtonActive.setAttribute('disabled', 'disabled')
}
buttonActive() {
  this._submitButtonActive.classList.remove(this._inactiveButton)
  this._submitButtonActive.removeAttribute('disabled')
}
_toggleButtonState(inputs) {
  if(this._hasInvalidInput (inputs) ) {
      this.buttonInactive()
  } else{
      this.buttonActive()
  }
}
  _hasInvalidInput (inputs)  {
    return inputs.some((inputErrorClass) => {
  
      return !inputErrorClass.validity.valid;
    })
  };
}