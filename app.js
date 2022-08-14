
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const controllers = require('./controllers');



app.get('/hello', controllers.helloWorldControllers.giveHelloWorldAction);
app.get('/', controllers.getUsersControllers.getUsersAction);
app.post('/', controllers.createUserControllers.createUserAction);
app.get('/:id', controllers.getUserControllers.getUserAction);
app.delete('/:id', controllers.deleteUserControllers.deleteUserAction);
app.patch('/:id', controllers.updateUserControllers.updateUserAction);
// app.use('/', require('./routes'));
app.listen(3000, (err) => {
    if (err) {
        console.error(`Error -`, err.message);
    }
    else {
        console.info(`Connect to http://localhost:${3000}`);
    }
})
