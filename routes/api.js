const express = require('express');
const router = express.Router();
const Tracks = require('../models/tracks');

router.get('/test', (req, res) => {
    Tracks.create({
        track_name: "test_track",
        badges: {
            Title: "Chem Module",
            Description: "Master ALEKS & attempt quiz",
            Points: "200",
            Portrait: "test",
            PortraitDescription: "Associate Professor of Chemistry",
            EarnedHoverURL: "test",
            EarnedURL: "test",
            UnearnedURL: "test"
        },
        dailies: {
            assignment_id: 12345
        }
    }).then(newTrack => {
        console.log(newTrack)
        res.json(newTrack)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router;