const dbs = require('../../data-access');
const makeUpdateUser = require('./make-update-user');
const updateUser = makeUpdateUser({ usersDb: dbs.usersDb });

module.exports = Object.freeze({
    updateUser,
})