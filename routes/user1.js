const express = require('express');
const { getUser1Name, getUser2Name, getProfilesName, getSharedName, getPathUser1 } = require('../util/data');


const router = express.Router();


router.get("/",(req, res, next) =>{
    res.render('user1', { 
        user1Name: getUser1Name(),
        user2Name: getUser2Name(),
        profilesName: getProfilesName(),
        sharedName: getSharedName(),
        path: getPathUser1()
    });
 });



module.exports = router;