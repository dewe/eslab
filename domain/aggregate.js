exports.apply = (events) => {
    return events.reduce((cake, event) => {
        return Object.assign(cake, event.data)
    }, {})
}
