require("dotenv").config();
const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
require('./passport.js');//AQUI ESTABA EL ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const authRoute = require('./routes/auth');
const bodyParser = require('body-parser');
const app = express();
const { CLIENT_URL, PORT } = process.env;

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

app.use(cors(
    {
    origin: CLIENT_URL,
    methods:'GET, POST, PUT, DELETE',
    credentials: true,
    }
));
app.use(cookieSession(
    {
        name: 'session',
        keys: ['lama'],
        maxAge: 24 * 60 * 60 *10
    }
));

app.use(passport.initialize());
app.use(passport.session());


app.use("/auth", authRoute);

app.listen(PORT, () => {
    console.log('Server is running on port '+ PORT)
});