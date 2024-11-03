const path = require('path');
const rootDir = require('../util/path');
const express = require('express');


const router = express.Router();


let user1Name = 'User1';
let user2Name = 'User2';


router.get("/",(req, res, next) =>{
    res.render('profiles', { user1Name, user2Name });
});


router.post('/update-names', (req, res) => {
    if (req.body.user1Name){
        user1Name = req.body.user1Name || User1;
    }
    if (req.body.user2Name){
        user2Name = req.body.user2Name || User2;
    }
    res.redirect('/');
});

exports.routes = router;
//module.exports = router;