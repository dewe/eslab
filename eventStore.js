const eventStreams = {}

exports.load = (aggregateId) => {
    return new Promise((resolve) => {
        const loaded = {
            aggregateId,
            events: eventStreams[aggregateId] || []
        }
        resolve(loaded)
    })
}

exports.store = (aggregateId, events) => {
    return new Promise(resolve => {
        const current = eventStreams[aggregateId] || []
        eventStreams[aggregateId] = current.concat(events)
        resolve()    
    })
}