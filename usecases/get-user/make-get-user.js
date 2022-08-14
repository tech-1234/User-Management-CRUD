module.exports = function makeGetUser({ usersDb }) {
    return async function getUser(data, id) {


        return await usersDb.getUser(data, id);
    }
}