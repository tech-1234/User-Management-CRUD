module.exports = function makeCreateUserAction({
    createUser
}) {
    return async function createUserAction(req, res) {
        console.info('test in create user controller');
        let data = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        }
        // console.log(data);

        res.send(await createUser(data));

        // return await createUser(data);
    }
}