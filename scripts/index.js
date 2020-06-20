const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__open-popup')
const popupCloseButton = popup.querySelector('.popup__close')
const popupSaveButton = popup.querySelector('.popup__save')
const name = document.querySelector('.profile__name')
const about = document.querySelector('.profile__description')
const form = document.querySelector('.popup__form')
const nameInput = form.querySelector('.popup__name_input')
const aboutInput = form.querySelector('.popup__about_input')

nameInput.value =  name.textContent
aboutInput.value = about.textContent
function popupToggle () {
    popup.classList.toggle('popup_opened')
}
 popupOpenButton.addEventListener('click', popupToggle)
 popupCloseButton.addEventListener('click', popupToggle)




function formSubmitHandler (evt) {
	evt.preventDefault(); 
    name.textContent =  nameInput.value
    about.textContent = aboutInput.value
}

form.addEventListener('submit', formSubmitHandler)
popupSaveButton.addEventListener('click', formSubmitHandler)
popupSaveButton.addEventListener('click', popupToggle)