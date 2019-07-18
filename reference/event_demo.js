const EventEmitter = require('events');

//Define class
class MyEmitter extends EventEmitter{}

//Instantiate object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Event fired!'));

//Launch event
myEmitter.emit('event');