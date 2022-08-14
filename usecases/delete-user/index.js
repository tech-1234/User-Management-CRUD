const dbs = require('../../data-access');
const makeDeleteUser = require('./make-delete-user');
const deleteUser = makeDeleteUser({ usersDb: dbs.usersDb });


module.exports = Object.freeze({
    deleteUser,
})