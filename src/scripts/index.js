import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js'
import {Section} from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'
import '../pages/index.css';
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
const popupAdd = document.querySelector('.popup_add');
const popupOpenButtonEdite = document.querySelector('.profile__edit');
const popupOpenButtonAdd = document.querySelector('.profile__add')
const titleInput = popupAdd.querySelector('.popup__input_value-place');
const linkInput = popupAdd.querySelector('.popup__input_value-link');
const name = document.querySelector('.profile__name');
const about = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const formAdd = document.querySelector('.popup__form_add');
const popupImage = document.querySelector('.popup__img');
const popupName = document.querySelector('.popup__box-title');
const myForm = document.querySelector('.popup__form')
const nameInput = form.elements.name;
const aboutInput = form.elements.about;
const popupWithImage = new PopupWithImage('popup_photo')
popupWithImage.setEventListeners()
const cardRender = new Section({ items: initialCards,
  renderer: (data) => {
    rendering(data)
  }
}, '.elements');
function rendering(data) {
  const card = new Card({data, handleCardClick: () => {
    popupWithImage.open(data)
  } }, '.elements-template');
    const cardElement = card.addCard();
    cardRender.addItems(cardElement)
}
const userInfo = new UserInfo({name: name, about: about})
const popupEditeWithForm = new PopupWithForm('popup',({ name, about }) => {
  userInfo.setUserInfo({name, about})
})
popupEditeWithForm.setEventListeners()
popupOpenButtonEdite.addEventListener('click', () => {
  const profile = userInfo.getUserInfo();
  nameInput.value = profile.name
  aboutInput.value = profile.about
  popupEditeWithForm.open()
})
function popupAddSave() {
  const nameOfNewCard = titleInput.value;
  const imageOfNewCard = linkInput.value;
  const newCard = { nameOf: nameOfNewCard, link: imageOfNewCard };
   rendering(newCard)
}
const popupAddWithForm = new PopupWithForm('popup_add', popupAddSave)
popupOpenButtonAdd.addEventListener('click', () => {
  popupAddWithForm.open()
})
popupAddWithForm.setEventListeners()
const formEditVaLidation = new FormValidator(config, myForm)
formEditVaLidation.enableValidation()
const formAddVaLid = new FormValidator(config, myForm)
formAddVaLid.enableValidation()
cardRender.renderItems()
export{popupImage, popupName}