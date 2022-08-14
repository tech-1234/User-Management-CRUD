const dbs = require('../../data-access');
const makeCreateUser = require('./give-create-user');
const createUser = makeCreateUser({ usersDb: dbs.usersDb });

module.exports = Object.freeze({
    createUser,
})