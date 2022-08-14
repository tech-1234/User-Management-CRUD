module.exports = function makeUpdateUser({ usersDb }) {
    return async function updateUser(data, id) {


        return await usersDb.updateUser(data, id);
    }
}