export class Section {
    constructor({items, renderer}, containeSelector) {
        this._items = items
        this._renderer = renderer
        this._container = document.querySelector(containeSelector)
    }
    renderItems() {
        this._items.forEach( data => {
            this._renderer(data)
        })
    }
    addItems(element) {
        this._container.prepend(element)
    }
    addItemsAppend(element) {
        this._container.append(element)
    }
}