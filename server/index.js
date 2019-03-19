const express = require('express');
const bodyParser = require('body-parser');
const session = ('express-session');
require('dotenv').config();

const checkForSession = require('./middlewares/checkForSession');

const swag_controller = require('./controllers/swag_controller');
const auth_controller = require('./controllers/auth_controller');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret:ProcessingInstruction.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use( checkForSession );

app.get('./api/swag', swag_controller.read);

app.post('/api/login', auth_controller.login);
app.post('/api/register', auth_controller.register);
app.post('/api/signout', auth_controller.signout);
app.get('/api/user', auth_controller.getuser);

const port = process.env.SERVER_PORT || 3000;
app.listen( port, () => {
    console.log(`Server listening on port ${port}.`);
})