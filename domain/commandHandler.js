const assert = require('assert')

exports.bake = (id) => {
    return [
        {
            eventType: 'cake created',
            data: {
                id
            }
        }
    ]
}

exports.addFrosting = (cake) => {
    assert(!cake.frosting, new Error('Not clean cake'))

    return [
        {
            eventType: 'frosting added',
            data: {
                frosting: 'cream',
                color: 'white'
            }
        }
    ]
}

exports.makeColor = (cake, color) => {
    assert(cake.frosting, new Error('No frosting'))
    assert(cake.color === 'white', new Error('Not white')) 

    return [
        {
            eventType: 'added color',
            data: {
                color: color,
                colorAdded: color
            }
        }
    ]
}

exports.quickMakeCake = (/* id */) => {

}
