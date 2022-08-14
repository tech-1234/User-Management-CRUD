module.exports = function makeGetUsers({ usersDb }) {
    return async function getUsers() {

        // console.info(`in usecase get users`);
        // const res = await usersDb.getUsers();
        // console.log(res);
        return await usersDb.getUsers();
    }
}