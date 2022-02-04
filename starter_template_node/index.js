const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('welcome', function() {
    console.log('HI, THIS IS NODE.JS APP.');
})

eventEmitter.on('bye', function() {
    console.log('THANKS FOR USING, BYE.');
})

eventEmitter.emit('welcome');
eventEmitter.emit('bye');