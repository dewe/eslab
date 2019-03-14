const reducer = (cake, event) => {
    let copy = Object.assign({}, cake)
    return Object.assign(copy, event.data)
}

exports.load = (id, eventStore) => {
    const events = eventStore.load(id).events
    const cake = events.reduce(reducer, {})
    return cake
}

exports.reducer = reducer

