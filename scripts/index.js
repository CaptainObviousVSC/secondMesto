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
const nameOfCard = document.querySelector('.element__title');
const linkOfCard = document.querySelector('.element__img');
const popupAddForm = popupAdd.querySelector('.popup__form');
const cardTemplate = document.querySelector('.elements-template');
const popupImage = document.querySelector('.popup__img');
const popupName = document.querySelector('.popup__box-title');
const nameInput = form.elements.name;
const aboutInput = form.elements.about;
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
function closePopupByEsc(evt) {
  const closeEachPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closeEachPopup.classList.remove('popup_opened')
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

function popupAddSave(evt) {
  evt.preventDefault();
  const nameOfNewCard = titleInput.value;
  const imageOfNewCard = linkInput.value;
  const newCard = { nameOf: nameOfNewCard, link: imageOfNewCard };
  popupClose(popupAdd)
  renderCard(newCard, cardElements)
}
function removeCard(evt) {
  const element = evt.target.closest('.element');
  element.remove();
};

function addCard(newCard) {
  const card = cardTemplate.content.cloneNode(true);
  card.querySelector('.element__title').textContent = newCard.nameOf;
  const cardImage = card.querySelector('.element__img');
  cardImage.src = newCard.link;
  cardImage.alt = newCard.nameOf;
  cardImage.addEventListener('click', function () {
    photoPopup(newCard)
  });
  card.querySelector('.element__remove').addEventListener('click', removeCard);
  const like = card.querySelector('.element__like');
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active')
  });
  return card;
};
const renderCard = (newCard, cardElements) => {
  const card = addCard(newCard);
  cardElements.prepend(card);
};
initialCards.forEach(newCard => {
  renderCard(newCard, cardElements)
});
formAdd.addEventListener('submit', popupAddSave);
function photoPopup(newCard) {
  const image = newCard.link;
  const place = newCard.nameOf;
  popupName.textContent = place;
  popupImage.src = image;
  popupOpen(popupPhoto)
}

