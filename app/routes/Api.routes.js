const express = require('express');
const router = express.Router();

router.get("/apiRoute", (req, res) => {
    res.send("apiRoute");
});

module.exports = router;