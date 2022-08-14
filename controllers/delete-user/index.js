const deleteUserUseCases = require('../../usecases/delete-user');
const makeDeleteUserAction = require('./give-delete-user.controller');
const deleteUserAction = makeDeleteUserAction({
    deleteUser: deleteUserUseCases.deleteUser,
})
module.exports = Object.freeze({
    deleteUserAction,
})
