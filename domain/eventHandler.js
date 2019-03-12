function eventHandler(cake, event) {
    copy = Object.assign({}, cake)
    return Object.assign(copy, event.data)
}

module.exports = eventHandler