
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSaveButton = popup.querySelector('.popup__save');
const name = document.querySelector('.profile__name');
const about = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const nameInput = form.elements.name;
const aboutInput = form.elements.about;


function popupToggle () {
    if (!popup.classList.contains('popup_opened')) {    
        nameInput.value = name.textContent;
        aboutInput.value = about.textContent;
    };
    popup.classList.toggle('popup_opened');
};
 popupOpenButton.addEventListener('click', popupToggle);
 popupCloseButton.addEventListener('click', popupToggle);

 

function formSubmitHandler (evt) {
	evt.preventDefault(); 
    name.textContent =  nameInput.value;
 about.textContent = aboutInput.value;
 popupToggle();
};
form.addEventListener('submit', formSubmitHandler);
const popupAdd = document.querySelector('.popup-add');
const popupAddOpenButton = document.querySelector('.profile__add');
const popupAddCloseButton = document.querySelector('.popup-add__close');
const popupAddSaveButton = document.querySelector('.popup-add__save');
const named = document.querySelector('.popup-add__card');
const linked = document.querySelector('.popup-add__card_link');
const nameOfCard = document.querySelector('.element__title');
const linkOfCard = document.querySelector('.element__img');
function popupAddToggle () {
  popupAdd.classList.toggle('popup-add_opened');
};
 popupAddOpenButton.addEventListener('click', popupAddToggle);
 popupAddCloseButton.addEventListener('click', popupAddToggle);

 const initialCards = [
  {
    nameOf: 'Архыз',
    alt: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    nameOf: 'Челябинская область',
    alt: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    nameOf: 'Иваново',
    alt: 'Иваново', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    nameOf: 'Камчатка',
    alt: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    nameOf: 'Холмогорский район',
    alt: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    nameOf: 'Байкал',
    alt: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const cardElements = document.querySelector('.elements');
const formCard = document.querySelector('.popup-add__form');
const cardTemplate = document.querySelector('.elements-template');
const popupImage = document.querySelector('.popup-photo__img');
const popupName = document.querySelector('.popup-photo__title');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCloseButton = document.querySelector('.popup-photo__close');
function popupPhotoToggle() {
  popupPhoto.classList.toggle('popup-photo_opened');
}
popupPhotoCloseButton.addEventListener('click', popupPhotoToggle);
function popupAddSave (evt) {
  evt.preventDefault();
  const nameOfNewCard = named.value;
  const imageOfNewCard = linked.value;
  const newCard = {nameOf: nameOfNewCard, link: imageOfNewCard};
  addCard(newCard);
  popupAddToggle ()
}
function removeCard(evt){
  const element = evt.target.closest('.element');
  element.remove();
}
function addCard(newCard) {
  const card = cardTemplate.content.cloneNode(true);
  card.querySelector('.element__title').textContent = newCard.nameOf;
  card.querySelector('.element__img').src = newCard.link;
  card.querySelector('.element__img').alt = newCard.alt;
  card.querySelector('.element__img').addEventListener('click', function() {
    photoPopup(newCard)
  });
    card.querySelector('.element__remove').addEventListener('click', removeCard);
  const like = card.querySelector('.element__like');
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active')
  });
  cardElements.prepend(card);
};
initialCards.forEach (newCard => {
  addCard(newCard);
  });
  formCard.addEventListener('submit', popupAddSave)
function photoPopup(newCard) {
const image = newCard.link;
const place = newCard.nameOf;
popupName.textContent = place;
popupImage.src = image;
popupPhotoToggle()
}

