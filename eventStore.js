const eventStreams = {}

exports.load = (aggregateId) => {
    return {
        aggregateId,
        events: eventStreams[aggregateId] || []
    }
}

exports.store = (aggregateId, events) => {
    console.log('***', aggregateId, events);
    
    eventStreams[aggregateId] = events
}