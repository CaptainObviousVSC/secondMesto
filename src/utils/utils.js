export const initialCards = [
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
  export const config = ({
     inputSelector: '.popup__input',
        submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
   });
   export const popupAdd = document.querySelector('.popup_add');
   export const popupOpenButtonEdite = document.querySelector('.profile__edit');
   export const popupOpenButtonAdd = document.querySelector('.profile__add')
   export const titleInput = popupAdd.querySelector('.popup__input_value-place');
   export const linkInput = popupAdd.querySelector('.popup__input_value-link');
   export const name = document.querySelector('.profile__name');
   export const like = document.querySelector('.element__like');
   export const submitButton = document.querySelector('.popup__save')
   export const about = document.querySelector('.profile__description');
   export const openAvatar = document.querySelector('.profile__avatar');
   export const formAvatar = document.querySelector('.popup__form_avatar')
   export const form = document.querySelector('.popup__form');
   export const formAdd = document.querySelector('.popup__form_add');
   export const popupImage = document.querySelector('.popup__img');
   export const popupName = document.querySelector('.popup__box-title');
   export const myForm = document.querySelector('.popup__form')
   export const nameInput = form.elements.name;
   export const aboutInput = form.elements.about;
