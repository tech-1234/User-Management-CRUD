
module.exports = function makeCreateUser({ usersDb }) {
    return async function createUser(data) {
        console.log('from get-create user use case');
        // const user = makeCreateUser({ data });
        // console.log(user);
        // console.log(await usersDb.createUser(user));
        console.log(data);
        return await usersDb.createUser(data);
    }
}