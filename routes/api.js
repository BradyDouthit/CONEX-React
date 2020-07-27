const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    console.log(process.env.REACT_APP_TEST)
    res.json(process.env.REACT_APP_TEST)
})

module.exports = router;