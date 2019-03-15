const express = require('express')
const app = express()
const port = 3000

const eventStore = require('./eventStore')
const service = require('./domain/commandHandler')
const aggregate = require('./domain/aggregate')

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { cake: {} })
})

app.get('/:id', function(req, res) {
    eventStore.load(req.params.id)
        .then(loaded => {
            const cake = aggregate.apply(loaded.events)
            res.render('index', { cake })        
        })
})

app.post('/', function (req, res) {
    const id = 'my-cake'
    const events = service.bake(id)
    eventStore.store(id, events)
    res.redirect('/' + id) 
})

app.post('/frosting/:id', function (req, res) {
    eventStore.load(req.params.id)
        .then(loaded => {
            const cake = aggregate.apply(loaded.events)
            const events = service.addFrosting(cake)
            eventStore.store(cake.id, events)
            res.redirect('/' + cake.id)         
        })
})

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))