/* eslint-disable no-undef */
const assert = require('assert');
const aggregate = require('../domain/aggregate')

describe('cake aggregate', () => {

    describe('applying events', () => {
        let event = { eventType: 'cake created', data: { id: 'my-cake' } }
        let reducer = aggregate.reducer

        it('applies event data', () => {
            cake = reducer({}, event)
            assert(cake.id == 'my-cake')
        })

        it('returns a copy', () => {
            initial = {}
            cake = reducer(initial, event)
            assert(cake != initial)
        })

        it('can be used for reducing multiple events', () => {
            let events = [event, event]
            cake = events.reduce(reducer, {})
            assert(cake.id)
        })

    })
})