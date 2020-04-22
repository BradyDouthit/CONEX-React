//load environment variables from the .env file if not production
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('client-sessions');
const path = require('path');
const PORT = process.env.PORT || 8080;

const config = require('./config');
const auth = require('./auth');
const canvas = require('./models/canvas');
const home = require('./routes/home')

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

app.get('/callback', auth.oath2_callback);
app.get('/api', (req, res) => {
    //System Index
    res.send("success")
});

app.use('/home', [auth.updateCookies, auth.checkUser, canvas.awardLuckies], home)

//error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log("404 Error:");
    console.log(err.message);

    res.status(err.status || 500);
    //res.render('error');
    
    // render the error page
    res.sendFile(path.join(__dirname, "/client/public/static/error/not-open.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});