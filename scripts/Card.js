import { popupImage, popupName, popupOpen, popupPhoto} from './index.js'
export class Card {
    constructor(data, cardTemplate) {
      this.name = data.nameOf
      this.link = data.link
      this._cardTemplate = cardTemplate
      this._element = this._getTemplate()
      this.image = this._element.querySelector('.element__img')
  }
    _getTemplate() {
      const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
        return cardElement
    }
  _removeCard(evt) {
    this.element = evt.target.closest('.element');
    this.element.remove();
  }
  _photoPopup() {
    popupName.textContent = this.name;
    popupImage.src = this.link;
    popupOpen(popupPhoto)
  }
  _setLike(evt) {
    evt.target.classList.toggle('element__like_active')
  }
  _setListeners() {
    this.image.addEventListener('click', () => {
      this._photoPopup()
    });
    this._element.querySelector('.element__remove').addEventListener('click', (evt) => {
     this._removeCard(evt)
    });
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._setLike(evt) }); 
  }
  addCard() {
    this._setListeners()
    this.image.src = this.link
    this._element.querySelector('.element__title').textContent = this.name
    this.image.alt = this.name
    return this._element
  }
  }