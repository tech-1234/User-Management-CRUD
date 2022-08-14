
module.exports = function makeUsersDb({
    makeDb
}) {
    return Object.freeze({
        getUsers,
        createUser,
        getUser,
        deleteUser,
        updateUser,
    })
    async function getUsers() {
        const db = await makeDb();
        const [rows, fields] = await db.execute(`SELECT * FROM users`);
        return rows;
    }
    async function createUser(user
    ) {
        const db = await makeDb();
        console.log(user);

        const [rows, fields] = await db.query("INSERT INTO users SET ?", user);
        return fields;
    }
    async function getUser(user, id) {
        const db = await makeDb();
        let result = await db.query(`SELECT * FROM users where id = ?`, id);
        return result;
    }
    async function deleteUser(user, id) {
        const db = await makeDb();
        let result = await db.query('DELETE FROM users WHERE id = ?', id);
        return result;
    }
    async function updateUser(user, id) {
        const db = await makeDb();
        console.log(user);
        var { firstName, lastName, age } = user;
        let result = await db.query(`UPDATE users SET firstName = "${firstName}", lastName = "${lastName}", age = "${age}" WHERE id = ?`, [id]);
        return result;
    }

}

