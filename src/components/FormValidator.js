
export class FormValidator {
    constructor(config, myForm) {
        this._form = myForm;
        this._input = config.inputSelector
        this._submitButton = config.submitButtonSelector
        this._inactiveButton = config.inactiveButtonClass
        this._inputError  = config.inputErrorClass
        this._error = config.errorClass
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
    const submitButtonActive = form.querySelector(this._submitButton)
    inputs.forEach(input => {
        input.addEventListener('input', e => {
           this._isValid(input)
            this._toggleButtonState(inputs, submitButtonActive)
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
  _toggleButtonState(inputs, submitButtonActive) {
      if(this._hasInvalidInput (inputs) ) {
          submitButtonActive.classList.add(this._inactiveButton)
          submitButtonActive.setAttribute('disabled', 'disabled')
      } else{
          submitButtonActive.classList.remove(this._inactiveButton)
          submitButtonActive.removeAttribute('disabled')
      }
    }
    _hasInvalidInput (inputs)  {
      return inputs.some((inputErrorClass) => {
    
        return !inputErrorClass.validity.valid;
      })
    };
  }