
function bake(id) {
    return [
        {
            event: 'cake created',
            data: {
                id
            }
        }
    ]
}

function addFrosting(cake) {

}

function makeColor(cake, color) {

}

module.exports = {
    bake,
    addFrosting,
    makeColor
}

