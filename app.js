const express = require('express')
const app = express()
const port = 3000

const eventStore = require('./eventStore')
const aggregate = require('./domain/aggregate')
const service = require('./domain/service')

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/:id', function (req, res, next) {
    eventStore.load(req.params.id)
        .then(loaded => {
            const events = loaded.events
            const cake = aggregate.apply(events)
            res.render('index', { cake, events })
        })
        .catch(error => next(error))
})

app.post('/', function (req, res, next) {
    const id = 'my-cake'
    service.createCake(eventStore, id)
        .then(() => res.redirect('/' + id))
        .catch(error => next(error))
})

app.post('/:id/frosting', function (req, res, next) {
    service.addFrosting(eventStore, req.params.id)
        .then(() => res.redirect('/' + req.params.id))
        .catch(error => next(error))
})

app.post('/:id/color/:color', function (req, res, next) {
    service.makeColor(eventStore, req.params.id, req.params.color)
        .then(() => res.redirect('/' + req.params.id))
        .catch(error => next(error))
})

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}!`))