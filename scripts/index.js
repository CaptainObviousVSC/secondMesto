const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSaveButton = popup.querySelector('.popup__save');
const name = document.querySelector('.profile__name');
const about = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const nameInput = form.querySelector('.popup__name');
const aboutInput = form.querySelector('.popup__about');


function popupToggle () {
    popup.classList.toggle('popup_opened')
    nameInput.value = name.textContent;
    aboutInput.value = about.textContent;
};
 popupOpenButton.addEventListener('click', popupToggle);
 popupCloseButton.addEventListener('click', popupToggle);

 

function formSubmitHandler (evt) {
	evt.preventDefault(); 
    name.textContent =  nameInput.value;
 about.textContent = aboutInput.value;
 popupToggle()
};
form.addEventListener('submit', formSubmitHandler);

