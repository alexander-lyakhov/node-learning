const events = require('events')
const evt = new events.EventEmitter()

evt.on('update', (text) => {
	console.log(text)
})


evt.emit('update', 'Test')
