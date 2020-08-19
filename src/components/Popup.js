
export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector
        this._popup = document.querySelector(`.${popupSelector}`)
    }
    open() {
        this._popup.classList.add('popup_opened');
          document.addEventListener('keyup', (evt) => {
             this._handleEscClose(evt)
          })
    }
    close() {
        this._popup.classList.remove('popup_opened')
          document.removeEventListener('keyup', (evt) => {
             this._handleEscClose(evt)
          })
    }
    _handleEscClose(evt) {
        const closeEachPopup = document.querySelector('.popup_opened');
        if (evt.key === 'Escape') {
            this.close(closeEachPopup)
        }
    }
    _closePopupByOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close(evt.currentTarget)
        }
    }
    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close()
        })
        this._popup.addEventListener('keyup', (evt) => {
            this._handleEscClose(evt)
        })
        this._popup.addEventListener('click', (evt) => {
            this._closePopupByOverlay(evt)
        })
    }
}