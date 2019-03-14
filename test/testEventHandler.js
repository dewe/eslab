/* eslint-disable no-undef */
const assert = require('assert');
const eventHandler = require('../domain/eventHandler.js')

describe('handle events', () => {
    let event = { eventType: 'cake created', data: { id: 'my-cake' } }

    it('applies event data', () => {
        cake = eventHandler({}, event)
        assert(cake.id == 'my-cake')
    })

    it('returns a copy', () => {
        initial = {}
        cake = eventHandler(initial, event)
        assert(cake != initial)
    })

    it('can be used for reducing multiple events', () => {
        let events = [event, event]
        cake = events.reduce(eventHandler, {})
        assert(cake.id)
    })

})


