module.exports = function makeGetUsersAction({ getUsers }) {
    return async function getUsersAction({ req, res }) {
        // console.info(`Test in get user controller`,)
        // res.send(getUsers());
        // getUsers();


        res.send(await getUsers());
    }
}