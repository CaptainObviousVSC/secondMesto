import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js'
import {Section} from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'
import './index.css';
import {initialCards, config, popupOpenButtonEdite, popupOpenButtonAdd, titleInput, linkInput, name, about,
   formAdd, myForm, nameInput, aboutInput} from  '../utils/utils.js'
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
const popupEditeWithForm = new PopupWithForm('popup', {
  formSubmitHandler: ({name, about}) => {
    userInfo.setUserInfo({name, about})
  }
})
popupEditeWithForm.setEventListeners()
popupOpenButtonEdite.addEventListener('click', () => {
  const profile = userInfo.getUserInfo();
  nameInput.value = profile.name
  aboutInput.value = profile.about
    formEditVaLidation.clearAllErrors()
     formEditVaLidation.buttonActive()
  popupEditeWithForm.open()
})

const popupAddWithForm = new PopupWithForm('popup_add', {
  formSubmitHandler:(data)=> {
    rendering( { nameOf: data.place, link: data.link } )
    popupAddWithForm.close()
  }
  })
popupOpenButtonAdd.addEventListener('click', () => {
  formAddVaLid.clearAllErrors()
  formAddVaLid.buttonInactive()
    formAddVaLid.clearInput()
  popupAddWithForm.open()
})
popupAddWithForm.setEventListeners()
const formEditVaLidation = new FormValidator(config, myForm)
formEditVaLidation.enableValidation()
const formAddVaLid = new FormValidator(config, formAdd)
formAddVaLid.enableValidation()
cardRender.renderItems()