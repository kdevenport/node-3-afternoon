const express = require('express');
const bodyParser = require('body-parser');
const session = ('express-session');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret:ProcessingInstruction.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

const port = process.env.SERVER_PORT || 3000;
app.listen( port, () => {
    console.log(`Server listening on port ${port}.`);
})