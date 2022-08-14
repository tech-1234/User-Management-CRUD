module.exports = function makeDeleteUser({ usersDb }) {
    return async function deleteUser(data, id) {


        return await usersDb.deleteUser(data, id);
    }
}