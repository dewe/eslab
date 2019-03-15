/* eslint-disable no-undef */
const assert = require('assert');
const commandHandler = require('../domain/commandHandler')

// todo: move 'id' to event store, as 'aggregateId', and add 'aggregateVersion' for locking

describe('cake baking commands', () => {

    it('can bake cake', () => {
        let events = commandHandler.bake('my-cake')

        assert.deepStrictEqual(events, [
            {
                eventType: 'cake created',
                data: {
                    id: 'my-cake'
                }
            }
        ])
    })

    it('can add frosting', () => {
        let cake = { id: 'fake-cake' }
        let events = commandHandler.addFrosting(cake)

        assert.deepStrictEqual(events, [
            {
                eventType: 'frosting added',
                data: {
                    frosting: 'cream',
                    color: 'white'
                }
            }
        ])
    })

    it('can add color to frosting', () => {
        let cake = { id: 'fake-cake', frosting: 'cream', color: 'white' }

        let events = commandHandler.makeColor(cake, 'red')

        assert.deepStrictEqual(events, [
            {
                eventType: 'added color',
                data: {
                    colorAdded: 'red',
                    color: 'red'
                }
            }
        ])
    })

    it('requires frosting to add color', () => {
        let cake = { id: 'fake-cake' }

        assert.throws(() => { commandHandler.makeColor(cake, 'red') }, 'ColorError')
    })

    it('can not re-color frosting', () => {
        let cake = { id: 'fake-cake', frosting: 'cream', color: 'red' }

        assert.throws(() => { commandHandler.makeColor(cake, 'green') }, 'ColorError')
    })

    it('knows how to quickly make a purple cake', () => {
        let events = commandHandler.quickMakeCake()
        
        assert.deepStrictEqual(events, [
            {
                eventType: 'cake created',
                data: {
                    id: 'my-cake'
                }
            },
            {
                eventType: 'frosting added',
                data: {
                    frosting: 'cream',
                    color: 'white'
                }
            },
            {
                eventType: 'added color',
                data: {
                    colorAdded: 'red',
                    color: 'red'
                }
            },
            {
                eventType: 'added color',
                data: {
                    colorAdded: 'blue',
                    color: 'purple'
                }
            }

        ])
    })

})