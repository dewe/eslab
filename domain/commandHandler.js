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

exports.addFrosting = (/* cake */) => {
    // todo: assert no frosting on cake
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
    // todo: assert on current cake color and frosting
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
