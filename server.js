const express = require("express");
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/conex-react";
const bodyParser = require('body-parser');

// get models
// let mongo = require("./models/mongo");

// get routes
let api = require('./routes/api')

// set port
let PORT = process.env.PORT || 8080;

// Initialize Express
let app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use('/api', api)

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Start the server
app.listen(PORT, function () {
    console.log('App running on ' + PORT)
});
