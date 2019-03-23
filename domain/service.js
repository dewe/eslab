/* eslint-disable no-console */
const commandHandler = require('./commandHandler')
const aggregate = require('./aggregate')

exports.createCake = (eventStore, id) => {
  const events = commandHandler.bake(id)
  return eventStore.store(id, events)
}

exports.addFrosting = (eventStore, id) => {
  return eventStore.load(id)
    .then(loaded => {
      const cake = aggregate.apply(loaded.events)
      const events = commandHandler.addFrosting(cake)
      return eventStore.store(id, events)
    })
    .catch(error => {
      console.error('service.addFrosting', error);
      throw error
    })
}


exports.makeColor = (eventStore, id, color) => {
  return eventStore.load(id)
    .then(loaded => {
      const cake = aggregate.apply(loaded.events)
      const events = commandHandler.makeColor(cake, color)
      return eventStore.store(id, events)
    })
    .catch (error => {
    console.error('service.makeColor', error);
    throw error
  })
}