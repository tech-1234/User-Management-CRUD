const dbs = require('../../data-access');
const makeGetUser = require('./make-get-user');
const getUser = makeGetUser({ usersDb: dbs.usersDb });


module.exports = Object.freeze({
    getUser,
})