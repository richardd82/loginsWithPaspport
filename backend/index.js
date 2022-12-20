require("dotenv").config();
const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
require('../passport.js');//AQUI ESTABA EL ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const passport = require('passport');
const authRoute = require('./routes/auth');
const app = express();
const { CLIENT_URL, PORT } = process.env;

app.use(cookieSession(
    {
        name: 'session',
        keys: ['lama'],
        maxAge: 24 * 60 * 60 *10
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors(
    {
    origin: "*",
    methods:'GET, POST, PUT, DELETE',
    credentials: true,
    }
));

app.use("/auth", authRoute);

app.listen(PORT, () => {
    console.log('Server is running on port '+ PORT)
});