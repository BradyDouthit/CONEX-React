//load environment variables from the .env file if not production
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
} 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const cookieParser = require('cookie-parser');
const session = require('client-sessions');

const config = require('./config');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(cookieParser(config.client_secret));

app.use(session({
    cookieName: 'session',
    secret: config.client_secret,
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5,
    cookie: {
        path: '/',
        ephemeral: false,
        httpOnly: true,
        secure: false,
        //sameSite: 'none'
    }
}));

app.get('/api', (req, res) => {
    //System Index
    res.send("Data")
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});