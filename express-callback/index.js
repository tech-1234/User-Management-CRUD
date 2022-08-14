module.exports = async function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            params: req.params,
        }
        const response = controller({ req, res });
        res.send(response);
    }
}