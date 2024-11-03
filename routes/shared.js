const path = require('path');

const express = require('express');

const rootDir = require('../util/path');    

const router = express.Router();

router.get("/adi",(req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'adi.html'));
 });

router.post("/adi",(req, res, next) =>{
    const regularObject = { ...req.body }; // Convert to a regular object
    console.log(regularObject);
    res.redirect('/adi');
});


module.exports = router;