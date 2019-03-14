module.exports = (cake, event) => {
    let copy = Object.assign({}, cake)
    return Object.assign(copy, event.data)
}
