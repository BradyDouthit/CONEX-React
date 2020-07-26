const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json(1234)
})

module.exports = router;