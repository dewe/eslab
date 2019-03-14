const express = require('express')
const app = express()
const port = 3000

// todo: move state and projection into command handler
const eventHandler = require('./domain/eventHandler')
const service = require('./domain/service')
const state = {}

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { })
})

app.get('/:id', function(req, res) {
    let events = state[req.params.id] || []
    let cake = events.reduce(eventHandler, {})
    res.render('index', { cake })
})

app.post('/', function (req, res) {
    let id = 'my-cake'
    state[id] = service.bake(id)
    res.redirect(id) 
})

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))