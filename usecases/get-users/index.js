const dbs = require('../../data-access');
const makeGetUsers = require('./make-get-users');
const getUsers = makeGetUsers({ usersDb: dbs.usersDb });


module.exports = Object.freeze({
    getUsers,
})