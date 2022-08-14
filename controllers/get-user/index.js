const getUserUseCases = require('../../usecases/get-user');

const makeGetUserAction = require('./give-get-user.controller');
const getUserAction = makeGetUserAction({
    getUser: getUserUseCases.getUser,
});
module.exports = Object.freeze({
    getUserAction,
})