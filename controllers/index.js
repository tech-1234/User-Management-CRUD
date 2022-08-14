const helloWorldControllers = require('./hello-world');
const getUsersControllers = require('./get-users');
const createUserControllers = require('./create-user');
const getUserControllers = require('./get-user');
const deleteUserControllers = require('./delete-user');
const updateUserControllers = require('./update-user');
module.exports = Object.freeze({
    helloWorldControllers,
    getUsersControllers,
    createUserControllers,
    getUserControllers,
    deleteUserControllers,
    updateUserControllers,
})