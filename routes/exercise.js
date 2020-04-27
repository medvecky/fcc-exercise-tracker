const express = require('express');
const router = express.Router();

router.post('/new-user', (req, res, next) => {
    console.log(req.query);
    res.json({message: "New user response"});
});

module.exports = router;
