import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js'
import {Section} from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js'
import {PopupWithSubmit} from '../components/PopupWithSubmit.js'
import {UserInfo} from '../components/UserInfo.js'
import {Api} from '../components/Api.js'
import './index.css';
import {config, popupOpenButtonEdite, popupOpenButtonAdd,
   formAdd, myForm, nameInput, aboutInput, openAvatar, formAvatar, submitButtonEdite, submitButtonAvatar, submitButtonAdd} from  '../utils/utils.js'
   import {togglePreloader, preloaderForPopupEdite, preloaderForPopupAdd, preloaderForPopupAvatar} from  '../utils/preloader.js' 
//   const popupWithImage = new PopupWithImage('popup_photo')
// popupWithImage.setEventListeners()
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: {
    authorization: '56ec9a7b-ee96-4d3a-a0c8-688e4ca62fd8',
    'Content-Type': 'application/json'
  }
})
const popupWithSubmit = new PopupWithSubmit('popup_confirm')
const formEditVaLidation = new FormValidator(config, myForm)
const formAddVaLid = new FormValidator(config, formAdd)
const formAvatarValid = new FormValidator(config, formAvatar)
formAvatarValid.enableValidation()
formEditVaLidation.enableValidation()
formAddVaLid.enableValidation()
togglePreloader(true)
api.getAppInfo().then(res => {
  const [initialCards, profileInfo] = res
  const userInfo = new UserInfo({name: '.profile__name', about: '.profile__description', openAvatar: '.profile__avatar'})
    const popupWithImage = new PopupWithImage('popup_photo')
  const cardRender = new Section({ items: initialCards,
    renderer: (data) => {
      rendering(data, true)
    }
  }, '.elements');
  function  rendering(data, toAppend) {
    const card = new Card({
      userId: profileInfo._id,
      data, 
      handleCardClick: () => {
      popupWithImage.open(data)

    },
    handleLikeClick: (id) => {
      api.likeCard(id).then (res => {
        card.updateLikes(res.likes)
      }).catch(err => console.error(err))
    },
    handleDislikeClick: (id) => {
      api.DislikeCard(id).then (res => {
        card.updateLikes(res.likes)
      }).catch(err => console.error(err))
    },
    handleDeleteIconClick: (id) => {
       popupWithSubmit.setSubmitAction(() => {
         api.deleteCard(id).then(() => {
           card.removeCard()
           popupWithSubmit.close()
         }).catch(err => console.error(err))
       })
        popupWithSubmit.open()
       
    }
   }, '.elements-template');
   const cardElement = card.addCard();
    if (toAppend) {
    cardRender.addItemsAppend(cardElement)
    } else {cardRender.addItems(cardElement)} 

  }
 
  api.getInformation().then(() => {
     userInfo.setUserInfo({name: profileInfo.name, about: profileInfo.about, openAvatar: profileInfo.avatar})
   }) .catch(err => console.error(err))
       const popupAddWithForm = new PopupWithForm('popup_add', {
         formSubmitHandler: (item) => { 
          preloaderForPopupAdd(true, submitButtonAdd)
          const dataToSend = {name: item.place, link: item.link}
           api.createCard(dataToSend).then(res => {
          rendering(res, false)
            })
            .catch(err => console.error(err))
      .finally(_ =>  {
        preloaderForPopupAdd(false, submitButtonAdd)
         popupAddWithForm.close()
      })
         } })
    const popupEditeWithForm = new PopupWithForm('popup', { 
      formSubmitHandler: ({name, about}) => { 
        preloaderForPopupEdite(true, submitButtonEdite)
      api.editInformation({name, about}).then(() => {
         userInfo.setUserInfo({name, about})
      })
      .catch(err => console.error(err))
      .finally(_ =>  {
        preloaderForPopupEdite(false, submitButtonEdite)
        popupEditeWithForm.close()
      })
      } 
    }) 
     const popupAvatarWithForm = new PopupWithForm('popup_avatar', {
      formSubmitHandler:(avatar)=> {
        preloaderForPopupAvatar(true, submitButtonAvatar)
        api.editeAvatar(avatar).then(res => {
          openAvatar.style.backgroundImage = `url(${res.avatar})`
        })
        .catch(err => console.error(err))
        .finally(_ =>  {
          preloaderForPopupAvatar(false, submitButtonAvatar)
           popupAvatarWithForm.close()
        })
      }
     })
     return {
      popupWithImage,
      popupAddWithForm,
      popupAvatarWithForm,
      popupEditeWithForm,
      cardRender, userInfo
     }
    })
    .then(res => {
      const { popupWithImage, userInfo, popupAddWithForm, popupAvatarWithForm, popupEditeWithForm, cardRender} = res
     popupWithImage.setEventListeners()
      popupAddWithForm.setEventListeners()
     popupAvatarWithForm.setEventListeners()
    popupEditeWithForm.setEventListeners()
    popupWithSubmit.setEventListeners()
    cardRender.renderItems()
    return {
      userInfo,
      popupEditeWithForm,
      popupAvatarWithForm, 
      popupAddWithForm
    }
 })
 .then(res => {
   const { userInfo, popupEditeWithForm, popupAvatarWithForm, popupAddWithForm} = res
  popupOpenButtonEdite.addEventListener('click', () => {
    const profile = userInfo.getUserInfo();
    nameInput.value = profile.name
    aboutInput.value = profile.about
      formEditVaLidation.clearAllErrors()
       formEditVaLidation.buttonActive()
    popupEditeWithForm.open()
  })
  openAvatar.addEventListener('click', () => {
    formAvatarValid.clearAllErrors()
    formAvatarValid.buttonInactive()
    formAvatarValid.clearInput()
    popupAvatarWithForm.open()
   })
   popupOpenButtonAdd.addEventListener('click', () => {
    formAddVaLid.clearAllErrors()
   formAddVaLid.buttonInactive()
     formAddVaLid.clearInput()
  popupAddWithForm.open()
})
 })
 .catch(err => console.error(err))
 .finally(_ =>  togglePreloader(false))
