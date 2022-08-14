const updateUserUseCases = require('../../usecases/update-user');
const makeUpdateUserAction = require('./give-update-user.controller');
const updateUserAction = makeUpdateUserAction({
    updateUser: updateUserUseCases.updateUser,
})
module.exports = Object.freeze({
    updateUserAction,
})