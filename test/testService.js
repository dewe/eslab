const assert = require('assert');
const service = require('../domain/service.js')

describe('cake domain service', () => {

    it.only('can bake cake', () => {
        let events = service.bake('my-cake')

        assert.deepStrictEqual(events, [
            {
                event: 'cake created',
                data: {
                    id: 'my-cake'
                }
            }
        ])
    })

    it('can add frosting', () => {
        let cake = { id: 'fake-cake' }
        let events = service.addFrosting(cake)

        assert.deepStrictEqual(events, [
            {
                event: 'frosting added',
                data: {
                    id: 'my-cake',
                    frosting: 'cream',
                    color: 'white'
                }
            }
        ])
    })

    it('can add color to frosting', () => {
        let cake = { id: 'fake-cake', frosting: 'cream', color: 'white' }

        let events = service.makeColor(cake, 'red')

        assert.deepStrictEqual(events, [
            {
                event: 'added color',
                data: {
                    id: 'my-cake',
                    color: 'red'
                }
            }
        ])
    })

    it('can not re-color frosting', () => {
        let cake = { id: 'fake-cake', frosting: 'cream', color: 'red' }

        assert.throws(() => { service.makeColor(cake, 'green') }, 'ColorError')
    })

})
