import {submitButton} from './utils.js'
export const togglePreloader = (show) => {
const preloader = document.querySelector('.lds-ripple')
if (show) {
preloader.style.display = 'inline-block'
} else {
    preloader.style.display = 'none'
}
}
export const preloaderForPopups = (show, submitButton) => {
if (show) {
    submitButton.textContent = 'Сохранение...'
} else{
    submitButton.textContent = 'Сохранить'
}
}