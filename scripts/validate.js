const obj = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});
enableValidation(obj)
function enableValidation({ formSelector, ...rest }) {
    const forms = Array.from(document.querySelectorAll(formSelector))
   forms.forEach(form => {
        form.addEventListener('submit', function (evt)  {
            evt.preventDefault()
       })
       setListeners(form, rest)
   })
}

function setListeners(form, { inputSelector, submitButtonSelector, ...rest }) {
    const inputs = Array.from(form.querySelectorAll(inputSelector))
    const submitButtonActive = form.querySelector(submitButtonSelector)
    toggleButtonState(inputs, submitButtonActive, rest)
    inputs.forEach(input => {
        input.addEventListener('input', e => {
           isValid(input, rest)
            toggleButtonState(inputs, submitButtonActive, rest)
      })
 })
}
function isValid(input, {...rest}) {
    console.log('hello')
    const inputName = input.getAttribute('name')
        const errorPlace = document.getElementById(`${inputName}-error`)
    if (!input.validity.valid) {
        showInputError(input, errorPlace, rest)
    } else{
   hideInputError(input, errorPlace, rest) 
   }
}

function showInputError( input, errorPlace, {inputErrorClass, errorClass,  ...rest })  {
  input.classList.add(inputErrorClass)
   errorPlace.textContent = input.validationMessage
  errorPlace.classList.add(errorClass)
}
function hideInputError(input, errorPlace, {inputErrorClass, errorClass, ...rest})  {
    input.classList.remove(inputErrorClass)
   errorPlace.textContent = ''
   errorPlace.classList.remove(errorClass)
}
function toggleButtonState(inputs, submitButtonActive, {inactiveButtonClass, ...rest}) {
    if(hasInvalidInput (inputs, rest) ) {
        submitButtonActive.classList.add(inactiveButtonClass)
        submitButtonActive.setAttribute('disabled', 'disabled')
    } else{
        submitButtonActive.classList.remove(inactiveButtonClass)
        submitButtonActive.removeAttribute('disabled')
    }
  }
  function hasInvalidInput (inputs, {...rest})  {
    return inputs.some((inputErrorClass) => {
  
      return !inputErrorClass.validity.valid;
    })
  };