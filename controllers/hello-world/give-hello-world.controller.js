module.exports = function makeGiveHelloWorld({
    givehelloWorld
}) {
    return function givehelloWorldAction({ req, res }) {
        console.info('Test in Controller');
        res.send(givehelloWorld());
        return givehelloWorld();
    }
}