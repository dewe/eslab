const reducer = (cake, event) => {
    let copy = Object.assign({}, cake)
    return Object.assign(copy, event.data)
}

exports.apply = (events) => {
    return events.reduce(reducer, {})
}

exports.reducer = reducer

