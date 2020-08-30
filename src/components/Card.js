
export class Card {
    constructor({userId, data, handleCardClick, handleLikeClick, handleDislikeClick, handleDeleteIconClick}, cardTemplate) {
      this._userId = userId
      this._id = data._id
      this._ownerId = data.owner._id
      this.name = data.name
      this.link = data.link
      this._likes = data.likes
      this._handleCardClick = handleCardClick
      this._handleLikeClick = handleLikeClick
      this._handleDislikeClick = handleDislikeClick
      this._handleDeleteIconClick = handleDeleteIconClick
      this._cardTemplate = cardTemplate
      this._element = this._getTemplate()
      this._image = this._element.querySelector('.element__img')
      this._removeButton = this._element.querySelector('.element__remove')
      this._like = this._element.querySelector('.element__like')
  }
  updateLikes(likes) {
  this._likes = likes
this.renderLikes()
}
_isLiked() {
  return this._likes.some(item => {
return item._id === this._userId
  })
}
renderLikes() {
  this._likeCounter.textContent = this._likes.length;
  if(this._isLiked()) {
    this._like.classList.add('element__like_active')
  }else {
    this._like.classList.remove('element__like_active')
  }
}
    _getTemplate() {
      const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
        return cardElement
    }
    removeCard() { 
      this._element.remove(); 
      this._element = null
    } 
  _setLike(evt) {
    evt.target.classList.toggle('element__like_active')
  }
  _setListeners() {
    this._image.addEventListener('click', () => {
      this._handleCardClick()
    });
     this._element.querySelector('.element__remove').addEventListener('click', () => {
      this._handleDeleteIconClick(this._id)
     } );
    this._like.addEventListener('click', () => {
      this._like.classList.toggle('element__like_active')
      if(this._like.classList.contains('element__like_active')) {
        this._handleLikeClick(this._id)
      } else {
        this._handleDislikeClick(this._id)
      }
     }); 
  }
  addCard() {
    this._setListeners()
    this._likeCounter = this._element.querySelector('.element__counter')
    this.renderLikes()
    if(this._ownerId === this._userId) {
      this._removeButton.style.display = 'block'
    }else {
      this._removeButton.style.display = 'none'
    }
    this._image.src = this.link
    this._element.querySelector('.element__title').textContent = this.name
    this._image.alt = this.name
    return this._element
  }
  }