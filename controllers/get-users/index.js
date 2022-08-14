const getUsersUseCases = require('../../usecases/get-users');

const makeGetUsersAction = require('./give-get-users.controller');
const getUsersAction = makeGetUsersAction({
    getUsers: getUsersUseCases.getUsers,
})
module.exports = Object.freeze({
    getUsersAction,
})