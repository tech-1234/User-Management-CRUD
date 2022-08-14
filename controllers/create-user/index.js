const createUserUseCases = require('../../usecases/create-user');

const makeCreateUserAction = require('./give-create-user.controller');
const createUserAction = makeCreateUserAction({
    createUser: createUserUseCases.createUser,
});
module.exports = Object.freeze({
    createUserAction,
})