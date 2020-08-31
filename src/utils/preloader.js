
export const togglePreloader = (show) => {
    const preloader = document.querySelector('.lds-ripple')
    if (show) {
        preloader.style.display = 'inline-block'
    } else {
        preloader.style.display = 'none'
    }
}
export const preloaderForPopupEdite = (show, submitButtonEdite) => {
    if (show) {
        submitButtonEdite.textContent = 'Сохранение...'
    } else {
        submitButtonEdite.textContent = 'Сохранить'
    }
}
export const preloaderForPopupAvatar = (show, submitButtonAvatar) => {
    if (show) {
        submitButtonAvatar.textContent = 'Сохранение...'
    } else {
        submitButtonAvatar.textContent = 'Сохранить'
    }
}
export const preloaderForPopupAdd = (show, submitButtonAdd) => {
    if (show) {
        submitButtonAdd.textContent = 'Создание...'
    } else {
        submitButtonAdd.textContent = 'Создать'
    }
}   