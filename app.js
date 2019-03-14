const express = require('express')
const app = express()
const port = 3000

const eventStore = require('./eventStore')
const service = require('./domain/service')
const aggregate = require('./domain/cakeAggregate')

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/:id', function(req, res) {
    const cake = aggregate.load(req.params.id, eventStore)
    res.render('index', { cake })
})

app.post('/', function (req, res) {
    const id = 'my-cake'
    const events = service.bake(id)
    eventStore.store(id, events)
    res.redirect('/' + id) 
})

app.post('/frosting/:id', function (req, res) {
    const cake = aggregate.load(req.params.id, eventStore)
    const events = service.addFrosting(cake)
    eventStore.store(cake.id, events)
    res.redirect('/' + cake.id) 
})

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))