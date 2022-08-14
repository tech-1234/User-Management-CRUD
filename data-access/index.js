const mysql = require('mysql2/promise');
const makeUsersDb = require('./users-db');

async function makeDb() {

    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cleanarchitecture',
    })
}

// const mysqlConnection = makeDb();

const usersDb = makeUsersDb({ makeDb });
console.info(usersDb);
module.exports = { usersDb };
