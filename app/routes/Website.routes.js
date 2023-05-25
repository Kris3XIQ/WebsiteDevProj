const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index.ejs');
    //res.render('index');    
});

router.get("/about", (req, res) => {
    res.send("about");
});

router.get("/products", (req, res) => {
    res.send("products");
})

router.get("/account", (req, res) => {
    res.send("account");
})

module.exports = router;