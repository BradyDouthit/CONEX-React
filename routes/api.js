const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json('this api works')
})

module.exports = router;