const express = require('express')
const app = express()
const port = 3000

const eventStore = require('./eventStore')
const eventHandler = require('./domain/eventHandler')
const service = require('./domain/service')

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { })
})

app.get('/:id', function(req, res) {
    let events = eventStore.load(req.params.id).events
    let cake = events.reduce(eventHandler, {})
    res.render('index', { cake })
})

app.post('/', function (req, res) {
    let id = 'my-cake'
    eventStore.store(id, service.bake(id))
    res.redirect(id) 
})

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))