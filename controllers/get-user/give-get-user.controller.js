module.exports = function makeGetUserAction({
    getUser
}) {
    return async function getUserAction(req, res) {
        console.info('test in get user controller');
        const id = req.params.id;
        let data = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        }
        // console.log(data, id);

        res.send(await getUser(data, id));

        // return await createUser(data);
    }
}