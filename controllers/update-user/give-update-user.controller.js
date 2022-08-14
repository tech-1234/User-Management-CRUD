module.exports = function makeUpdateUserAction({
    updateUser
}) {
    return async function updateUserAction(req, res) {
        console.info('test in update user controller');
        console.info("update ", req.body);
        const id = req.params.id;
        let data = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
        }
        console.log(data, id);

        res.send(await updateUser(data, id));

        // return await createUser(data);
    }
}