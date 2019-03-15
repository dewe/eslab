/* eslint-disable no-undef */
const assert = require('assert');
const aggregate = require('../domain/aggregate')

describe('cake aggregate', () => {

    describe('applying events', () => {
        let event = { eventType: 'cake created', data: { id: 'my-cake' } }
        let event2 = { eventType: 'frosting added', data: { frosting: 'cream' } }

        it('applies event data', () => {
            cake = aggregate.apply([event])
            assert(cake.id == 'my-cake')
        })

        it('returns a new copy', () => {
            cake1 = aggregate.apply([event])
            cake2 = aggregate.apply([event])
            assert(cake1 != cake2)
        })

        it('can hydrate from multiple events', () => {
            cake = aggregate.apply([event, event2])
            assert(cake.id)
            assert(cake.frosting)
        })
    })

})