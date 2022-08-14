const makeGiveHelloWorld = require('./give-hello-world');
const giveHelloWorld = makeGiveHelloWorld();

module.exports = Object.freeze({
    giveHelloWorld,
})