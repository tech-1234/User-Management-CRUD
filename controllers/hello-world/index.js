const helloWorldUseCases = require('../../usecases/hello-world');
const makeGiveHelloWorldAction = require('./give-hello-world.controller');

const giveHelloWorldAction = makeGiveHelloWorldAction({
    givehelloWorld: helloWorldUseCases.giveHelloWorld,
})
module.exports = Object.freeze({
    giveHelloWorldAction,
})