import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js'
const initialCards = [
  {
    nameOf: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    nameOf: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    nameOf: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    nameOf: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    nameOf: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    nameOf: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
 const config = ({
   inputSelector: '.popup__input',
      submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
 });
const popup = document.querySelector('.popup')
const popupEdite = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupPhoto = document.querySelector('.popup_photo');
const popupOpenButtonEdite = document.querySelector('.profile__edit');
const popupOpenButtonAdd = document.querySelector('.profile__add');
const popupCloseButtonEdite = popupEdite.querySelector('.popup__close');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close');
const popupCloseButtonPhoto = popupPhoto.querySelector('.popup__close');
const titleInput = popupAdd.querySelector('.popup__input_value-place');
const linkInput = popupAdd.querySelector('.popup__input_value-link');
const name = document.querySelector('.profile__name');
const about = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const formAdd = document.querySelector('.popup__form_add');
const cardElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('.elements-template')
const popupImage = document.querySelector('.popup__img');
const popupName = document.querySelector('.popup__box-title');
const myForm = document.querySelector('.popup__form')
const nameInput = form.elements.name;
const aboutInput = form.elements.about;
const closePopupByEsc = (evt) => {
  const closeEachPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    popupClose(closeEachPopup)
  }
}
const popupOpen = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByEsc)
}

const popupClose = (popup) => {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keyup', closePopupByEsc)
}
const closePopupByOverlay = (evt) => {

  if (evt.target === evt.currentTarget) {
    popupClose(evt.currentTarget)
  }
}
popupEdite.addEventListener('click', closePopupByOverlay)
popupAdd.addEventListener('click', closePopupByOverlay)
popupPhoto.addEventListener('click', closePopupByOverlay)
function popupEditeToggle() {
  if (!popupEdite.classList.contains('popup_opened')) {
    nameInput.value = name.textContent;
    aboutInput.value = about.textContent;
  };

  popupOpen(popupEdite)
};
popupOpenButtonEdite.addEventListener('click', popupEditeToggle);
popupCloseButtonEdite.addEventListener('click', () => {
  popupClose(popupEdite);
});

popupOpenButtonAdd.addEventListener('click', () => {
  popupOpen(popupAdd)
})
popupCloseButtonAdd.addEventListener('click', () => {
  popupClose(popupAdd);
});

popupCloseButtonPhoto.addEventListener('click', () => {
  popupClose(popupPhoto);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  about.textContent = aboutInput.value;
  popupClose(popupEdite);
}


form.addEventListener('submit', formSubmitHandler);

function renderCard(initialCards) {
  const card = new Card(initialCards, '.elements-template');
  const cardElement = card.addCard();
  cardElements.prepend(cardElement);
}
initialCards.forEach((initialCards) => {
  renderCard(initialCards)
});
function popupAddSave(evt) {
  evt.preventDefault();
  const nameOfNewCard = titleInput.value;
  const imageOfNewCard = linkInput.value;
  const newCard = { nameOf: nameOfNewCard, link: imageOfNewCard };
  popupClose(popupAdd)
  renderCard(newCard)
}
formAdd.addEventListener('submit', popupAddSave);
const formEditVaLidation = new FormValidator(config, myForm)
formEditVaLidation.enableValidation()
const formAddVaLid = new FormValidator(config, myForm)
formAddVaLid.enableValidation()
export { popupImage, popupName, popupOpen, popupPhoto};