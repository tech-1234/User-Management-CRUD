module.exports = function makeExpressCallback(controller) {
    return (res, res) => {
        let users = [
            {
                firstName: "Ankit",
                lastName: "Dutta",
                age: 21
            }
        ]
        req.users = users;
        const response = controller({ req, res });
        res.send(response);
    }
}