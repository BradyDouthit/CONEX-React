const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const trackSchema = new Schema({
    track_name: String,
    badges: {
        Title: String,
        Description: String,
        Points: String,
        Portrait: String,
        PortraitDescription: String,
        EarnedHoverURL: String,
        EarnedURL: String,
        UnearnedURL: String 
    },
    dailies: {
        assignment_id: Number
    }
});

const Tracks = mongoose.model('Tracks', trackSchema);
module.exports = Tracks;