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

exports.makeColor = (/* cake, color */) => {

}

exports.quickMakeCake = (/* id */) => {

}
