const express = require('express');
const bodyParser = require('body-parser');
const session = ('express-session');
require('dotenv').config();

const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret:ProcessingInstruction.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use( checkForSession );

const port = process.env.SERVER_PORT || 3000;
app.listen( port, () => {
    console.log(`Server listening on port ${port}.`);
})