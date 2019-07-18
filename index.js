const Person = require('./person');
const Logger = require('./reference/Logger');

const logger = new Logger();
logger.on('message', (data) => console.log('Called listener: ', data));

const examplePerson = new Person('Oscar', 37);
console.log(examplePerson.greeting());

logger.log('Hello there!');
