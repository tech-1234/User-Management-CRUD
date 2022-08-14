module.exports = function makeDeleteUserAction({
    deleteUser
}) {
    return async function deleteUserAction(req, res) {
        console.info('test in delete user controller');
        const id = req.params.id;
        let data = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        }
        // console.log(data, id);

        res.send(await deleteUser(data, id));

        // return await createUser(data);
    }
}