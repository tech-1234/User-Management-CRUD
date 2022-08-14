const express = require('express');
const router = express.Router();

const controllers = require('./controllers');

router.get('/hello', controllers.helloWorldControllers.giveHelloWorldAction);


module.exports = router;