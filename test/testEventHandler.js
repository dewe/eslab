const assert = require('assert');
const eventHandler = require('../domain/eventHandler.js')

describe.only('handle event', () => {
    let event = { event: 'cake created', data: { id: 'my-cake' } }

    it('applies event data', () => {
        cake = eventHandler({}, event)
        assert(cake.id == 'my-cake')
    })

    it('returns a copy', () => {
        initial = {}
        cake = eventHandler(initial, event)        
        assert(cake != initial)
    })

})


